import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./home_page/home_page";
import ShoppingPage from "./shopping_page/shopping_page";
import  CartPage from "./cart_page/cart_page";


const routes = [{
    path:"/",
    element: <HomePage />,
},
{
    path:"/home_page/home_page.jsx",
    element: <HomePage />,
},
{
    path:"/shopping_page/shopping_page.jsx",
    element: <ShoppingPage />,

},
{
    
    path:"/cart_page/cart_page.jsx",
    element: <CartPage />,
}
];

export default createBrowserRouter(routes);