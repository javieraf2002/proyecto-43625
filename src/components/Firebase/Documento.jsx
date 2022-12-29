import React from "react";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

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