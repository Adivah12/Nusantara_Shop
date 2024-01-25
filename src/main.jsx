import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/pages/home";
import { ProductsPage } from "./components/pages/products";
import { ContactPage } from "./components/pages/contact";
import { LoginPage } from "./components/pages/login";
import { ErrorPage } from "./components/pages/404";
import { BuyPage } from "./components/pages/buynow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/home",
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/buy",
    element: <BuyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
