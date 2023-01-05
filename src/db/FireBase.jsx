import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useEffect } from "react";
import arrayInventario from "../db/inventario.json";

const FireBase = () =>{
    
    console.log(arrayInventario);

    useEffect(()=>{

        const db = getFirestore();
        const coleccion = collection(db, "inventario");

        arrayInventario.forEach((item)=>{
            addDoc(coleccion, 
                {
                    fruta: item.fruta,
                    precio: item.precio,
                    stock: item.stock,
                    imagen: item.imagen,
                    descripcion: item.descripcion,
                    categoria: item.categoria
                });
        })
    }, []);

    return(
        <h1>FIREBASE</h1>
    )
};

export default FireBase;