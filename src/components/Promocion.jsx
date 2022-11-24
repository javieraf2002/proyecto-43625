import React from "react";

const Promocion = () => {
    return <div>
        <div className="container-fluid bg-warning">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-2">
                        <img src="imagenes/mcdonalds-logo-bg-red.png" alt="mac" width="123" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div>
                            <h2>Descárgate nuestra app</h2>
                            <p>Descárgate nuestra app y no te pierdas nuestras novedades</p>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex align-items-center text-end">
                        <a className="btn bg-light" href="#" target="_blank">Descargar ahora</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Promocion;