import "./navbar.css";
import { RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import router from "../routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {useCart} from "../cart/cart.jsx";

function Navbar() {

  const {cart} = useCart();
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <Link to="/home_page/home_page.jsx">Home</Link>
        <Link to="/shopping_page/shopping_page.jsx">Shopping</Link>
        <Link to="/cart_page/cart_page.jsx">Total Length: {cart.length}</Link>
      </ul>
    </nav>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default Navbar;
