import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayInventario from "../db/inventario.json"
import Item from "./Item";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListaContainer = () => {

    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {categoria} = useParams();
  
    //Consulta a nuestra coleccion de datos

    useEffect(()=>{
    
        const db = getFirestore();
        const coleccion = collection(db, "inventario");     
        const q = categoria ? query(coleccion, where("categoria", "==" , categoria)) : coleccion;

        getDocs(q).then((x) => {
            setItems(x.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
        setCargando(false);
        }); 
    }, [categoria]);

    return (
        <div className="container my-5">
            {
            cargando    ? <Loader titulo={"Cargando Lista de Productos..."} />
                        : <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListaContainer;