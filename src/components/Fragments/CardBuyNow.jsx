import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const CardBuyNow = ({ onTotalPriceChange }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Mengambil data dari local storage saat komponen di-mount
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("selectedProducts")) || [];
    setSelectedProducts(storedProducts);
    updateTotalPrice(storedProducts);
  }, []); // Mencegah pengulangan terus-menerus

  const updateTotalPrice = (products) => {
    const total = products.reduce(
      (acc, product) => acc + product.totalPrice,
      0
    );
    if (onTotalPriceChange) {
      onTotalPriceChange(total);
    }
  };

  // Menghapus produk berdasarkan index
  const handleRemoveProduct = (index) => {
    const updatedProducts = selectedProducts.filter((_, i) => i !== index);

    // Menyimpan data yang sudah diupdate ke local storage
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));

    // Mengupdate state dengan data yang baru
    setSelectedProducts(updatedProducts);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = [...selectedProducts];
    updatedProducts[index].quantity = Math.max(0, newQuantity);
    updatedProducts[index].totalPrice =
      updatedProducts[index].quantity * updatedProducts[index].price;

    updateTotalPrice(updatedProducts);
  };

  return (
    <div>
      {selectedProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-center rounded-md bg-gray-300 my-5 mx-2"
        >
          <div className="flex ml-6 my-4 w-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-16 h-16 rounded-md"
            />
            <div className="ml-4 mt-2 text-xs font-bold">
              <p className="mb-3">{product.title}</p>
              <button
                className="bg-teal-600 px-2 py-1 text-slate-200 rounded-md hover:text-gray-300 hover:bg-teal-700"
                onClick={() => handleRemoveProduct(index)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mx-2 text-sm">
            <div className="flex mr-12 border border-gray-400">
              <button
                className="font-bold px-4 border-r border-gray-400"
                onClick={() =>
                  handleQuantityChange(index, product.quantity - 1)
                }
              >
                -
              </button>
              <p className="px-6 py-1">{product.quantity}</p>
              <button
                className="px-4 font-bold border-l border-gray-400"
                onClick={() =>
                  handleQuantityChange(index, product.quantity + 1)
                }
              >
                +
              </button>
            </div>
            <div className="mr-8">
              <p>{`Rp.${product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}`}</p>
            </div>
            <div>
              <p>{`Rp.${(product.quantity * product.price).toLocaleString(
                "id-ID",
                {
                  style: "currency",
                  currency: "IDR",
                }
              )}`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBuyNow;
