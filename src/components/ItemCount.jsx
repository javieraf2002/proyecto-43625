import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [agregado, setAgregado] = useState(false);

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    };

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    const agregarAlCarrito = (cantidad)=>{
        if (counter <= itemStock){
            setCounter(1);
            setItemStock(itemStock - cantidad);
            setAgregado(true);
            onAdd(cantidad);
        }
    };

    useEffect(()=>{
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-6 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center">
                    {agregado   ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar Compra</Link>
                                :<button type="button" className="btn btn-outline-primary" onClick={()=>{agregarAlCarrito(counter)}}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount 