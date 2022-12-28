import React from "react";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, cartTotal } = useContext(CartContext);

    console.log(cart);

    if (cartTotal() === 0) { //Si  el carrito esta vacio
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger">No se Encontraron Productos en el Carrito</div>
                        <Link to={"/"} className="btn btn-warning">Volver a la Pagina Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
                </div>
            </div>
        </div>
    );
};

export default Cart; quedo en 01:10:33 