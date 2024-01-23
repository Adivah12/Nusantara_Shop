import { CardBuyNow } from "../Fragments/CardBuyNow";
import { Link } from "react-router-dom";
import LeftArrow from "../Elements/Icons/LeftArrow";
import BNI from "../Elements/Icons/Bank/BNI";
import BCA from "../Elements/Icons/Bank/BCA";
import Mandiri from "../Elements/Icons/Bank/MANDIRI";
import BRI from "../Elements/Icons/Bank/BRI";
import { Button } from "../Elements/Button/Button";
import { useState, useEffect } from "react";
import "/src/style.css";
import Payment from "../Elements/Icons/Payment";

export const BuyPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingCost, setShippingCost] = useState(0); // Biaya pengiriman
  const [selectedShipping, setSelectedShipping] = useState("DF"); // Default shipping option
  const [showPopup, setShowPopup] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [countdown, setCountdown] = useState(300); // Waktu hitungan mundur dalam detik
  const [virtualAccountNumber, setVirtualAccountNumber] = useState("");
  const [checkoutProducts, setCheckoutProducts] = useState([]);

 
  const handleShippingChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedShipping(selectedOption);
    // Update shipping cost based on the selected shipping option
    updateShippingCost(selectedOption);
  };

  const updateShippingCost = (shippingOption) => {
    // Logic to calculate shipping cost based on the selected shipping option
    let cost = 0;

    switch (shippingOption) {
      case "FS":
        cost = 0;
        break;
      case "SD":
        cost = 15000;
        break;
      case "ED":
        cost = 30000;
        break;
      case "ND":
        cost = 100000;
        break;
      case "SDay":
        cost = 200000;
        break;
      default:
        cost = 0;
    }

    // Update shipping cost
    setShippingCost(cost);
  };

  // Total cost including product price and shipping cost
  const totalCost = totalPrice + shippingCost;

  useEffect(() => {
    // Mengambil data dari local storage saat komponen di-mount
    const storedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    setSelectedProducts(storedProducts);
    setCheckoutProducts(storedProducts); // Set checkoutProducts secara awal
  }, []); // Mencegah pengulangan terus-menerus

  useEffect(() => {
    // Update totalItems dan totalPrice setiap kali selectedProducts berubah
    setTotalItems(calculateTotalItems());
    setTotalPrice(calculateTotalPrice());
    setCheckoutProducts(selectedProducts);
  }, [selectedProducts]); // Bergantung pada perubahan pada selectedProducts


  const calculateTotalItems = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );
  };

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  const calculateTotalPrice = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  useEffect(() => {
    
    let timer;

    if (showPopup && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [showPopup, countdown]);

  const handleCheckoutClick = () => {
     // Save the totalCost to the database using PHP
     const formData = new FormData();
     formData.append("TotalCost", totalCost);
   
     fetch("http://nusantara.great-site.net/uas/total.php", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ TotalCost: totalCost }),
     })
       .then((response) => response.json())
       .then((data) => {
         console.log(data); // You can handle the response from the server
          // Update virtual account number state with the received value
          setVirtualAccountNumber(data.VirtualAccountNumber);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
       const params = new URLSearchParams();
       params.append('selectedProducts', JSON.stringify(selectedProducts));
       
       fetch("http://nusantara.great-site.net/uas/total.php", {
        method: "POST",
        body: JSON.stringify({ selectedProducts: checkoutProducts }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Handle respons jika diperlukan
        })
        .catch((error) => {
          console.error("Error:", error);
        });
   
     // Set showPopup menjadi true ketika tombol CHECKOUT diklik
     setShowPopup(true);
    setShowBlur(true);
    setCountdown(300); // Sesuaikan waktu hitungan mundur sesuai kebutuhan
  };

  const closePopup = () => {
    setShowPopup(false);
    setShowBlur(false);
  };

  return (
    <div className="bg-gray-400 w-full h-screen flex justify-center items-center">
      <div className="w-4/5 flex shadow-2xl shadow-gray-700">
        <div className="bg-slate-200 w-4/5 py-4 ">
          <div className="flex justify-between mx-4 border-b border-gray-400 pb-2">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            <h2 className="font-bold">3 Items</h2>
          </div>
          <div className="flex justify-between mx-5 mt-4 text-gray-500 font-semibold text-xs italic uppercase">
            <h4>Product details</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
            <h4>Total</h4>
          </div>
          <div>
            <div className="h-80">
              <CardBuyNow onTotalPriceChange={handleTotalPriceChange} />
            </div>
            <div className="flex items-end mt-8">
              <Link
                to="/products"
                className="flex items-center ml-5 text-teal-600 hover:text-teal-700 font-semibold text-sm"
              >
                <LeftArrow />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 w-2/5">
          <h1 className="font-bold text-xl border-b border-gray-400 w-11/12 mt-4 mx-4 pb-2">
            Order Summary
          </h1>
          <div className="flex justify-between mt-3 mx-4 text-sm">
            <h3>{totalItems} Items</h3>
            <p>{`${totalPrice.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}`}</p>
          </div>
          <div className="w-11/12 ml-4 mt-2">
            <label
              htmlFor="shipping"
              className="block mb-2 text-sm font-semibold"
            >
              Shipping
            </label>
            <select
              value={selectedShipping}
              onChange={handleShippingChange}
              id="shipping"
              className="text-gray-500 focus:text-black outline-none text-sm rounded-lg block w-full p-2.5 bg-slate-200"
            >
              <option value="DF" disabled selected>
                Pilih Metode Pengiriman
              </option>
              <option value="FS">Free Shipping - Rp.0</option>
              <option value="SD">Standard Delivery - Rp.15.000</option>
              <option value="ED">Express Delivery - Rp.30.000</option>
              <option value="ND">Next Day - Rp.100.000</option>
              <option value="SDay">Same Day - Rp.200.000</option>
            </select>
          </div>
          <div className="w-11/12 ml-4 mt-2">
            <h3 className="mb-2 text-sm font-bold text-gray-900 ">Payment</h3>
            <ul className="w-full">
              {/* Start Input BCA */}
              <li className="pb-2">
                <input
                  type="radio"
                  id="bca"
                  name="paymentMethod"
                  value="bca"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="bca"
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 "
                >
                  <div className="flex">
                    <BCA></BCA>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK CENTRAL ASIA
                    </h4>
                  </div>
                </label>
              </li>
              {/* End Input BCA */}
              {/* Start Input MANDIRI */}
              <li className="pb-2">
                <input
                  type="radio"
                  id="mandiri"
                  name="paymentMethod"
                  value="mandiri"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="mandiri"
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 "
                >
                  <div className="flex">
                    <Mandiri></Mandiri>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK MANDIRI
                    </h4>
                  </div>
                </label>
              </li>
              {/* End Input MANDIRI */}
              {/* Start Input BRI */}
              <li className="pb-2">
                <input
                  type="radio"
                  id="bri"
                  name="paymentMethod"
                  value="bri"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="bri"
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 "
                >
                  <div className="flex">
                    <BRI></BRI>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK RAKYAT INDONESIA
                    </h4>
                  </div>
                </label>
              </li>
              {/* End Input BRI */}
              {/* Start Input BNI */}
              <li className="pb-2">
                <input
                  type="radio"
                  id="bni"
                  name="paymentMethod"
                  value="bni"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="bni"
                  className="inline-flex items-center justify-between w-full py-1 px-2 text-gray-500 bg-slate-200 border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-slate-300 "
                >
                  <div className="flex">
                    <BNI></BNI>
                    <h4 className="flex items-center ml-2 text-xs">
                      BANK NEGARA INDONESIA
                    </h4>
                  </div>
                </label>
              </li>
              {/* End Input BNI */}
            </ul>
          </div>
          <div className="flex justify-between border-t border-gray-400 pt-2 mt-2 w-11/12 ml-4 text-sm">
            <h3 className="font-bold">TOTAL COST</h3>
            <p>{`${totalCost.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}`}</p>
          </div>
          <Button
            classname="text-xs p-2 rounded-sm w-11/12 ml-4"
            onClick={handleCheckoutClick}
          >
            CHECKOUT
          </Button>
          {/* Popup */}
          {showBlur && (
            <div className="blur-background">
              <div className={`popup ${showPopup ? "show" : ""} w-2/5`}>
                {/* Isi dari popup, seperti kode virtual account atau informasi pembayaran */}
                {/* <Payment /> */}
                <img
                  src="/public/img/money.gif"
                  alt=""
                  className="w-40 h-40 ml-40"
                />
                <p className="my-4 flex justify-center font-semibold text-gray-800">
                  Kode Virtual Account: {virtualAccountNumber}
                </p>
                <p className="my-2 flex justify-center">
                  Waktu tersisa :{" "}
                  <span className="text-red-600 ml-1">
                    {Math.floor(countdown / 60)} menit {countdown % 60} detik
                  </span>
                </p>
                {/* Tombol untuk menutup popup */}
                <button
                  className=" text-xs text-slate-200 hover:text-gray-400 p-2 rounded-sm w-3/5 ml-24 bg-teal-600 hover:bg-teal-700"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
