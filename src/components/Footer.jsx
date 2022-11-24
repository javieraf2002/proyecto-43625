import React from "react";

const Footer = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="#" className="mx-1"><img src="imagenes/facebook.svg" alt="Facebook" width='32'/></a>
                    <a href="#" className="mx-1"><img src="imagenes/twitter.svg" alt="Twitter" width='32'/></a>
                    <a href="#" className="mx-1"><img src="imagenes/instagram.svg" alt="Instagram" width='32'/></a>
                    <a href="#" className="mx-1"><img src="imagenes/youtube.svg" alt="Youtube" width='32'/></a>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <a href="#" target="_blank" className="mx-1"><img src="imagenes/app_store_3x_d293084ca1.png" alt="app" width="115" /></a>
                    <a href="#" target="_blank" className="mx-1"><img src="imagenes/disponible_google_play_3x_c977cae3bc.png" alt="app" width="129" /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted" href="#">Link</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 text-end">
                    <p><img src="imagenes/logo.png" alt="mac" width="35" /> ©Mercado de Frutas 2022</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;