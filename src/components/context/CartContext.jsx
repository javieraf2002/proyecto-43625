import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //Carrito de compra

    //Funciones para modificar los productos en el carrito

    const addItem = (item, cantidad) => {
        
        if (isInCart(item.id)) {
            let p = cart.findIndex(x => x.id === item.id);
            cart[p].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    };

    const removeItem = (id)=>{
        const products = cart.filter(x => x.id !== id);
        setCart([...products]);
    };

    const clear = ()=>{
        setCart([]);
    };

    const cartTotal = ()=>{
        return cart.reduce((total, item) => total += item.cantidad, 0);
    };

    const sumaTotal = ()=>{
        return cart.reduce((total, item) => total += item.cantidad * item.precio, 0);
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, sumaTotal}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;
