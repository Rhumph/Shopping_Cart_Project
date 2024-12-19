import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./home_page/home_page";
import ShoppingPage from "./shopping_page/shopping_page";


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

}];

export default createBrowserRouter(routes);