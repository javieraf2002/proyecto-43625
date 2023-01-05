import React from "react";
import { Link, useParams } from "react-router-dom";

const Ticket = () => {

    const{id} = useParams();

    return(
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">
                        <h1>Gracias por su compra</h1>                       
                        <p>Su orden es: <b>{id}</b></p>
                    </div>                    
                    <Link to={"/"} className="btn btn-warning">Volver a la Pagina Principal</Link>
                </div>
            </div>
        </div>
    )
};

export default Ticket;
