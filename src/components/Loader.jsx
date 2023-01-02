import React from "react";

const Loader = ({titulo})=>{
    return(
        <div className="container my-5 text-center">
            <div className="row">
                <div className="col-12-md">
                    <span className="spinner-border text-success"></span>
                    <h2 className="text-success fw-bold">{titulo}</h2>
                </div>
            </div>
        </div>
    )
};

export default Loader;