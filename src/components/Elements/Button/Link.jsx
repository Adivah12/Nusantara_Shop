import { Link } from "react-router-dom";
import React from "react";

export const LinkTo = (props) => {
  const { children, to, isActive } = props;
  return (
    <>
      <Link
        to={to}
        className={`mx-4 font-bold hover:underline-offset-4 hover:underline hover:text-teal-700 ${
          isActive ? "underline text-teal-600 underline-offset-4" : ""
        }`}
      >
        {children}
      </Link>
    </>
  );
};
