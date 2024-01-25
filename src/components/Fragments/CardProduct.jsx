import { StarIcon } from "../Elements/Icons/Star";
import { Button } from "../Elements/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import "/src/style.css";

export const CardProduct = (props) => {
  const { children, productData: initialProductData } = props;
  const [showModal, setShowModal] = useState(false);

  // menyimpan state pesanan
  // const handleBuyNow = () => {
  //   try {
  //     const existingData =
  //       JSON.parse(localStorage.getItem("selectedProducts")) || [];
  //     existingData.push(initialProductData); // Memakai initialProductData yang berbeda dari setiap card
  //     localStorage.setItem("selectedProducts", JSON.stringify(existingData));
  //     alert("Produk berhasil ditambahkan ke keranjang!");
  //     console.log(existingData);
  //   } catch (error) {
  //     console.error("Gagal menyimpan data ke local storage:", error);
  //   }
  // };

  const handleBuyNow = () => {
    try {
      const existingData =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      existingData.push(initialProductData);
      localStorage.setItem("selectedProducts", JSON.stringify(existingData));
      setShowModal(true);
      console.log(existingData);
    } catch (error) {
      console.error("Gagal menyimpan data ke local storage:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="border border-slate-400 w-52 max-h-80 mx-2 my-8 rounded-2xl shadow-md duration-100 shadow-gray-500 hover:shadow-lg hover:shadow-gray-600">
      {children}
      <div className="w-full flex justify-center">
        <Button classname="px-8 text-xs h-6" onClick={handleBuyNow}>
          Buy Now
        </Button>
      </div>
      {/* Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Success Popup"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <img
            src="/img/verified.gif"
            alt=""
            className="w-20 h-20 ml-32 mb-2"
          />
          <h2 className="font-bold text-gray-800">
            Produk berhasil ditambahkan ke keranjang!
          </h2>
          <Button classname="px-8 text-xs h-6 w-3/5 ml-16" onClick={closeModal}>
            Tutup
          </Button>
        </div>
      </Modal>
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <img src={image} alt="error" className="h-44 w-full mx-auto rounded-t-xl" />
  );
};

const Body = (props) => {
  const { title } = props;
  return (
    <>
      <div className="flex justify-center my-2">
        <h1 className="font-semibold text-base">{title}</h1>
      </div>
      <div className="mx-2 flex items-center">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
    </>
  );
};

const Footer = (props) => {
  const { price, count } = props;
  return (
    <>
      <div className="flex justify-between items-center mx-3 mt-2">
        <p className="text-sm font-semibold">
          Rp.
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </p>
        <p className="text-sm">{count} Terjual</p>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
