import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { HomePage } from "./components/pages/home";
import { ProductsPage } from "./components/pages/products";
import { ContactPage } from "./components/pages/contact";
import { LoginPage } from "./components/pages/login";
import { ErrorPage } from "./components/pages/404";
import { BuyPage } from "./components/pages/buynow";

const App = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
          fallback={<ErrorPage />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
       <Route path="/buy" element={<BuyPage />} />
      </Routes>
   </Router>
   </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("root")).render(<LoginPage />);
