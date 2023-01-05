import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc} from "firebase/firestore";
import Loader from "./Loader";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();

    useEffect(()=>{

        const db = getFirestore();
        const i = doc(db, "inventario", id);

        //Obtener un producto
        getDoc(i).then((data)=>{
            setCargando(false);
            if (data.exists()) {
                setItem({id: data.id, ...data.data()});
            }else{

            }           
        })
    }, [id]);

    return (
        <div className="container my-5">
            {
                cargando    ?   <Loader titulo={"Cargando Producto..."} />
                            :   <ItemDetail item={item} />
            }           
        </div>
    )
}

export default ItemDetailContainer;