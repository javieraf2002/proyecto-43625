import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arrayInventario from "../db/inventario.json"
//import Documento from "./Firebase/Documento";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc} from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(arrayInventario.find(item => item.id === parseInt(id))); //Filtrar mi array de productos y devuelvo 1 solo objeto
    //         }, 2000);
    //     });

    //     promesa.then((data) => {
    //         setItem(data);
    //     });
    // }, [id]);

    useEffect(()=>{

        const db = getFirestore();
        const i = doc(db, "inventario", id);

        //Obtener un producto
        getDoc(i).then((data)=>{
            if (data.exists()) {
                setItem({id: data.id, ...data.data()});
                console.log(item);
            }else{
                console.log("El producto no existe");
            }           
        })
    }, []);

    return (
        <div className="container my-5">
            <ItemDetail item={item} />
            {/* <Documento /> */}
        </div>
    )
}

export default ItemDetailContainer;