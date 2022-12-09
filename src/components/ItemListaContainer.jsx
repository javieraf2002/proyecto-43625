import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayInventario from "../db/inventario.json"
import ItemList from "./ItemList";

const ItemListaContainer = () => {

    const [items, setItems] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoria ? arrayInventario.filter(item => item.categoria === categoria) : arrayInventario);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        });    
    }, [categoria]);

    return (
        <div className="container my-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListaContainer;