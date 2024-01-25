import { LinkTo } from "../Button/Link";
import { Button } from "../Button/Button";
import { BagIcon } from "../Icons/Bag";
import { useState, useEffect } from "react";

const username = localStorage.getItem("username");

export const Navbar = (props) => {
  const { activePage } = props;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location = "/";
  };

  return (
    <div
      className={`flex justify-between items-center shadow-lg py-2 fixed w-full transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="ml-4">
        <h1 className="font-bold text-2xl text-teal-700 italic">
          Nusantara <span className="text-black">Shop</span>
        </h1>
      </div>
      <div className="">
        <LinkTo children="Home" to="/" isActive={activePage === "/"} />
        <LinkTo
          children="Products"
          to="/products"
          isActive={activePage === "/products"}
        />
        <LinkTo
          children="Contact"
          to="/contact"
          isActive={activePage === "/contact"}
        />
      </div>
      <div className="flex items-center mr-4">
        <p className="px-4 font-semibold">{username}</p>
        <BagIcon />
        <Button children="Logout" classname="px-6" onClick={handleLogout} />
      </div>
    </div>
  );
};
