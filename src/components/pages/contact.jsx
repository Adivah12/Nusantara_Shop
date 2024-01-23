import React, { useState } from "react";
import { Button } from "../Elements/Button/Button";
import { Input } from "../Elements/Input/Input";
import { Navbar } from "../Elements/Navbar/Navbar";
import { CardContact } from "../Fragments/CardContact";

export const ContactPage = () => {
  const activePage = "/contact";
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    try {
      const response = await fetch("http://localhost/uas/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, message }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Pengiriman data berhasil:", data.message);
        setNotification("Saran Anda telah terkirim: " + data.message);
        setError(""); // Clear any previous error
      } else {
        setError("Pengiriman data gagal: " + data.message);
        setNotification(""); // Clear any previous notification
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Terjadi kesalahan saat mengirim data");
      setNotification(""); // Clear any previous notification
    }
  };

  const persons = [
    {
      name: "Faizal Putra R",
      skills: ["Full Stack", "Android", "Student"],
      notel: 81385776118,
      gmail: "faizalputraramadhan29@gmail.com",
      image: "./public/img/faisal-2.jpeg",
    },
    {
      name: "M. Raihan Hafiz",
      skills: ["Front End", "Gamers", "Student"],
      notel: 895333909847,
      gmail: "muhammadraihan86185@gmail.com",
      image: "./public/img/hannn.jpeg",
    },
    {
      name: "Aditya Vahreza",
      skills: ["Back End", "Cyber Security", "Student"],
      notel: 88224931267,
      gmail: "vahreza48@gmail.com",
      image: "./public/img/adit-denis.jpeg",
    },
  ];

  return (
    <>
      {/* Bagian atas komponen */}
      {/* Start */}
      <div className="w-full h-screen bg-[url('./public/img/bg-4.jpg')] bg-cover">
        <Navbar activePage={activePage} />
        <div className="w-full pt-20">
          <div className="w-full flex justify-center pr-10">
            <h1 className="text-4xl font-semibold ml-10 mt-8 text-slate-300 [text-shadow:0_3px_0_rgb(0_0_0/_100%)]">
              Contact Person
            </h1>
          </div>
          <div className="flex justify-evenly mt-16">
            {persons.map((person, index) => (
              <CardContact key={index} person={person} />
            ))}
          </div>
        </div>
      </div>
      {/* End */}
      {/* Start */}
      <div className="w-full h-screen flex flex-col items-center pt-32 bg-[url('./public/img/bg-7.jpg')] bg-cover bg-bottom">
        <div className="block my-6">
          <h1 className="mx-auto ml-8 text-4xl font-semibold  text-slate-100 [text-shadow:0_2px_0_rgb(0_0_0/_100%)]">
            Get in touch
          </h1>
          <p className="mx-auto text-base text-gray-950 [text-shadow:0_1px_0_rgb(255_255_255/_40%)] underline underline-offset-8">
            Let's talk about your project on this page
          </p>
        </div>
        <div className="py-10">
          <form onSubmit={handleLogin}>
            <div className="flex justify-between">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                classname="mr-2 border-2 border-teal-500 placeholder:text-gray-600"
              />
              <Input
                type="email"
                name="email"
                placeholder="Example@gmail.com"
                classname=" border-2 border-teal-500 placeholder:text-gray-600"
              />
            </div>
            <div className="max-w-2xl mx-auto">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block p-2.5 w-full mx-auto text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-500 outline-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button children="Submit" classname="px-20 py-2 text-sm" />
            </div>
            {notification && (
              <p className="text-xs ml-2 text-green-500">{notification}</p>
            )}
            {error && <p className="text-xs ml-2 text-red-500">{error}</p>}
          </form>
        </div>
      </div>
      {/* End */}
    </>
  );
};
