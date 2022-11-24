import React from "react";

const Contacto = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Contacto</h2>
            <div className="row justify-content-center">
                <div className="col-md-6 bg-success p-2 text-dark bg-opacity-10 border border-success rounded-3">
                    <div class="mb-3">
                        <label for="Input1" className="form-label">Nombre (obligatorio)</label>
                        <input type="text" className="form-control" id="Input1"/>
                    </div>
                    <div class="mb-3">
                        <label for="Input2" className="form-label">Correo electrónico (obligatorio)</label>
                        <input type="email" className="form-control" id="Input2"/>
                    </div>
                    <div class="mb-3">
                        <label for="Textarea1" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="Textarea1" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-success ">Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Contacto;