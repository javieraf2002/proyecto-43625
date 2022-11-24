import React from "react";

const ItemListContainer = ({titulo, comp1}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-warning text-center" role="alert">
                        {titulo}
                        {comp1}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemListContainer;