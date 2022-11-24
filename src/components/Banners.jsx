import React from "react";

const Banners = () => {
    return <div>
        <div className="container">
            <div className="row ">

                <div className="col-md-6 text-center shadow p-3 mb-5 bg-body rounded">
                    <p><img src="imagenes/BANNER_DESKTOP_ARG_7a95e0d455.jpg" alt="mac" className="img-fuid"/></p>
                    <p>Adelantá tu pedido desde el celular con tu app y retiralo como</p>
                    <p><a className="btn btn-warning" href="https://www.mcdonalds.com.ar/en-familia/cajita-feliz-juguete" target="_blank">Ver Mas</a></p>
                </div>

                <div className="col-md-6 text-center shadow p-3 mb-5 bg-body rounded">
                    <p><img src="imagenes/Banner_Mc_Delivery_Desktop_c79e2ea066.jpg" alt="mac" className="img-fluid"/></p>
                    <p>Descargá nuestra app y pedí a domicilio</p>
                    <p><a className="btn btn-warning" href="https://www.mcdonalds.com.ar/en-familia/cajita-feliz-juguete" target="_blank">Ver Mas</a></p>
                </div>

            </div>
        </div>
    </div>
};

export default Banners;