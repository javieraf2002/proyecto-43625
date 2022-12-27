import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{

    const [itemStock, setItemStock] = useState(0);

    const onAdd = (cantidad)=>{
        setItemStock(itemStock - cantidad);
    }

    useEffect(()=>{
        setItemStock(item.stock)
    }, [item]);

    return(
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.imagen} alt={item.nombre} />
            </div>
            <div className="col-md-4">
                <h1>{item.fruta}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail; quedo en 00:40:52