import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {

    const { cart, sumaTotal, clear } = useContext(CartContext);
    const [ nombre, setNombre ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ ordenId, setOrdenId ] = useState("");
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");    
    const generarOrden = () => {     
        const fecha = new Date();
        const orden = {
            buyer: {name: nombre, 
                    phone: telefono,
                    email: email},
            items:  cart.map(i => ({id: i.id, title: i.fruta, price: i.precio})),
            total: sumaTotal(),
            order_date: `${fecha.getFullYear()}/${fecha.getMonth()}/${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`
        }

        addDoc(ordersCollection, orden).then((x) => {
        setOrdenId(x.id);        
        clear();
    });
    }

    return(
        <div className="container">
            <div className="row">
                {/* Formulario checkout */}
                <div className="col-md-6">

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Ingrese su Nombre:</label>
                            <input type="text" className="form-control" placeholder="Nombre" onInput={(e)=>{setNombre(e.target.value)}} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Ingrese su Telefono:</label>
                            <input type="number" className="form-control" placeholder="Telefono" onInput={(e)=>{setTelefono(e.target.value)}}/>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Ingrese su Email:</label>
                            <input type="text" className="form-control" placeholder="Email" onInput={(e)=>{setEmail(e.target.value)}}/>
                        </div>

                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>

                </div>
                {/* Resumen Venta */}
                <div className="col-md-6">
                
                    <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt="item.nombre" width={80} /></td>
                                        <td className="align-middle">{item.fruta}</td>
                                        <td className="align-middle">{item.cantidad}</td>
                                        <td className="align-middle">${item.cantidad * item.precio}</td>
                                    </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td className="align-middle"><b>Total a Pagar</b></td>
                                    <td className="align-middle"><b>${sumaTotal()}</b></td>
                                </tr>
                            </tbody>
                    </table>

                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                {ordenId !== "" ? <Navigate to={"/ticket/" + ordenId}/> 
                                : ""}
                </div>
            </div>
        </div>
    )
};

export default Checkout;
