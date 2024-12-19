import { useState } from "react";
import "./navbar.css";
import { RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import router from "../routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Navbar() { 
  const [cart, setCart] = useState(0);

  return (
    <nav>
      <ul>
        <Link to="/home_page/home_page.jsx">Home</Link>
        <Link to="/shopping_page/shopping_page.jsx">Shopping</Link>
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