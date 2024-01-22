import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/pages/home";
import { ProductsPage } from "./components/pages/products";
import { ContactPage } from "./components/pages/contact";
import { LoginPage } from "./components/pages/login";
import { ErrorPage } from "./components/pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
