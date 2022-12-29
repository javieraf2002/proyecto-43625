import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayInventario from "../db/inventario.json"
import Item from "./Item";
import ItemList from "./ItemList";

const ItemListaContainer = () => {

    const [items, setItems] = useState([]);
    const {categoria} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(categoria ? arrayInventario.filter(item => item.categoria === categoria) : arrayInventario);
    //         }, 2000);
    //     });
    //     promesa.then((data) => {
    //         setItems(data);
    //     });    
    // }, [categoria]);

    //Agregar el array a la base de datos, solo se hace una sola ves
    /*     
    console.log(arrayInventario);
    useEffect(()=>{

        const db = getFirestore();
        const coleccion = collection(db, "inventario");

        arrayInventario.forEach((item)=>{
            addDoc(coleccion, item);
        })
    }, []);
    */
    
    //Consulta a nuestra coleccion de datos

    useEffect(()=>{
    
        const db = getFirestore();
        const coleccion = collection(db, "inventario");     
        const q = categoria ? query(coleccion, where("categoria", "==" , categoria)) : coleccion;

        getDocs(q).then((x) => {
            setItems(x.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
        }); 
    }, [categoria]);

    return (
        <div className="container my-5">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListaContainer;