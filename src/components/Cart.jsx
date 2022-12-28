import React from "react";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, cartTotal, clear, removeItem, sumaTotal } = useContext(CartContext);
   
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

                <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                    <Link onClick={clear} className="btn btn-warning mb-3" title="Vaciar Carrito">Vaciar Carrito</Link>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.imagen} alt="item.nombre" width={80} /></td>
                                    <td className="align-middle">{item.fruta}</td>
                                    <td className="align-middle">{item.cantidad}</td>
                                    <td className="align-middle">${item.cantidad * item.precio}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {removeItem(item.id)}} title={"Eliminar Producto"}> <img src="/imagenes/trash3.svg" alt={"Eliminar Productos"} width={32} /> </Link></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="align-middle"><b>Total a Pagar</b></td>
                                <td className="align-middle"><b>${sumaTotal()}</b></td>
                                <td className="text-end"><button className="btn btn-warning">Finalizar Compra</button></td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    );
};

export default Cart;