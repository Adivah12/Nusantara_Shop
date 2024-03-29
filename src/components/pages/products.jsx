import React, { useState, useEffect } from "react";
import dataJson from "/Json/source";
import { Navbar } from "../Elements/Navbar/Navbar";
import { CardProduct } from "../Fragments/CardProduct";
import { ShieldIcon } from "../Elements/Icons/Shield";
import { LoveIcon } from "../Elements/Icons/Love";
import { TentangKami } from "../Fragments/TentangKami";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // Menggunakan data dari file JSON yang diimpor
    setProducts(dataJson);
  };
  const activePage = "/products";
  return (
    <div className="w-full h-full max-h-full bg-slate-300">
      <Navbar activePage={activePage} />
      <div className="flex justify-between mx-4 pt-28 pb-2 ">
        <p className="font-semibold ml-9">Pria & Wanita</p>
        <p className="flex text-sm items-center mr-9">
          <ShieldIcon /> <span className="ml-2">100% Bahan Terbaik</span>
        </p>
      </div>
      <div className="border border-gray-400 mx-12"></div>
      <div className="w-full h-full flex justify-between flex-wrap px-10">
        {products.map((product) => (
          <CardProduct key={product.id} productData={product}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title} />
            <CardProduct.Footer
              price={product.price}
              count={product.count}
              id={product.id}
            ></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="border border-gray-400 mx-12 mt-4"></div>
      <div className="w-full flex text-justify px-16 py-24 text-sm">
        {/* Tentang Kami */}
        <div className="w-1/5 ml-8">
          <p className="font-semibold mb-2">Tentang Kami</p>
          <TentangKami />
        </div>
        <div className="w-4/5 mx-6">
          <p className="font-semibold mb-2">
            Nusantara Shop - Membawa Eksplorasi Budaya ke Dunia Digital!
          </p>
          <p>
            Nusantara Shop membawa Anda ke dunia belanja online dengan sentuhan
            lokal yang kaya dan pengalaman tanpa batas. Sebagai platform
            e-commerce unggulan di wilayah Nusantara, kami mengundang Anda untuk
            menjelajahi kekayaan budaya melalui koleksi produk berkualitas
            tinggi yang menampilkan keindahan dan keragaman warisan Nusantara.
          </p>
          <br />
          <p className="font-semibold pb-2">Mengapa Memilih Nusantara Shop?</p>
          <ol className="list-decimal">
            <li>
              Eksplorasi Budaya Tanpa Batas: Nusantara Shop adalah pintu gerbang
              virtual ke keindahan dan kekayaan budaya Nusantara. Setiap produk
              yang kami tawarkan adalah perpaduan antara tradisi dan modernitas,
              memberikan pengalaman belanja yang unik dan bermakna.
            </li>
            <li>
              Belanja dengan Hati yang Tenang: Kami memahami pentingnya
              kepercayaan dalam belanja online. Nusantara Shop memberikan
              keamanan transaksi sebagai prioritas utama, memastikan setiap
              pembelian Anda dilakukan dengan hati yang tenang.
            </li>
            <li>
              Komunitas Penuh Inspirasi: Bergabunglah dengan komunitas Nusantara
              Shop dan jadilah bagian dari perjalanan kami dalam melestarikan
              dan mempromosikan kekayaan budaya. Dengan mendaftarkan produk Anda
              atau menjelajahi penawaran menarik, Anda berkontribusi pada
              pertumbuhan komunitas yang penuh inspirasi.
            </li>
          </ol>
        </div>
      </div>
      <div className=" py-4 px-8 flex items-center justify-between text-sm">
        <p className="flex items-center">
          Made With <LoveIcon /> | Copyright &copy; 2023 Nusantara Shop.
        </p>
        <div className="flex">
          <p className="mx-1">Cookies |</p>
          <p className="mx-1">Security |</p>
          <p className="mx-1">Term of Service |</p>
          <p className="mx-1">Privacy Statement</p>
        </div>
      </div>
    </div>
  );
};
