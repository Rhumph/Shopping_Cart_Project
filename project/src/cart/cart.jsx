import { useState } from "react";

let cart = [];
let setCart;

export const CartProvider = ({ children }) => {
    const [cartState, setCartState] = useState([]);
    cart = cartState;
    setCart = setCartState;

    return children;
};

export const useCart = () => {
    const addItems = (item) => {
        cart = [...cart, item];
        setCart(cart);
    };

    const removeItems = (item) => {
        cart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(cart);
    };

    const getCartLength = () => {
        return cart.length;
    };

    return { cart, addItems, removeItems, getCartLength };
};



export default CartProvider;