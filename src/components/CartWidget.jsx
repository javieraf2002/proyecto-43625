import React from "react";

const CardWidget = () => {
    return <div>
        <button type="button" className="btn btn-success position-relative">
            <img src="imagenes/cart4.svg" alt="Carrito" width="40" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    </div>
};

export default CardWidget;