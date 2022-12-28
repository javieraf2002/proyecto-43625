import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]); //Carrito de compra

    //Funciones para modificar los productos en el carrito

    const addItem = (item, cantidad) => {
        
        console.log(cantidad);

        if (isInCart(item.id)) {
            let p = cart.find(x => x.id === item.id);
            cart[p].cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad }]);
        }
    };

    const isInCart = (id) => {

        const cartAux = cart.filter(x => x.id !== id);
        setCart([...cartAux]);
    };

    const removeItem = (id)=>{
        return cart.filter();
    };

    const clear = ()=>{
        setCart([]);
    };

    const cartTotal = ()=>{
        return cart.length;
    };

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContextProvider;
