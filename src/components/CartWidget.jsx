import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext"; 

const BotonCarrito = ({total})=>{
    return (
        <Link to={"/cart"} className="btn btn-success position-relative">
            <img src="/imagenes/cart4.svg" alt="Carrito" width="40" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
        </Link>
    )
}

const CardWidget = () => {

    const {cartTotal} = useContext(CartContext);

    return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} /> : "";
};

export default CardWidget;