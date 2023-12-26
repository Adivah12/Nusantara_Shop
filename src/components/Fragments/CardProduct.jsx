import { StarIcon } from "../Elements/Icons/Star";
import { Button } from "../Elements/Button/Button";
import { Link } from "react-router-dom";

export const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="border border-slate-400 w-52 max-h-80 mx-2 my-8 rounded-2xl shadow-md duration-100 shadow-gray-500 hover:shadow-lg hover:shadow-gray-600">
      {children}
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
  const { price, count, id } = props;
  return (
    <>
      <div className="flex justify-between items-center mx-3 mt-2">
        <p className="text-sm font-semibold">Rp.{price}</p>
        <p className="text-sm">{count} Terjual</p>
      </div>
      <div className="w-full flex justify-center">
        <Link to={`/product/${id}`}>
          <Button classname="px-8 text-xs h-6">Product Details</Button>
        </Link>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
