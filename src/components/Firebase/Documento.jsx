import React from "react";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

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
   
const Documento = ()=>{
    
    const [producto, setProducto] = useState({});

    useEffect(()=>{

        const db = getFirestore();
        const item = doc(db, "inventario", "0Ymmq2APQZHkNZiTHtUf");

        //Obtener producto
        getDoc(item).then((data)=>{
            if (data.exists()) {
                console.log(data.data());
            }else{
                console.log("El producto no existe");
            }           
        })
    }, []);

    return(
        <h1>DOCUMENTO FIREBASE</h1>
    )
};

export default Documento;