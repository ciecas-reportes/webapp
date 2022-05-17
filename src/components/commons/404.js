import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const NotFound = () => {


    return (
    <div>
        <Header />
        <section className="section is-medium">
            <div className="container">
            <div className="columns is-vcentered">
                <div className="column has-text-centered">
                <h1 className="title">404 Página no encontrada</h1>
                <p className="subtitle">la página que estás buscando no está disponible.</p>
                <Link to={`/`} className="button">Home</Link>
                </div>
                <div className="column has-text-centered">
                <img src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/link_broken.png" alt="Broken link" />
                </div>
            </div>
            </div>
        </section>
    </div>
    )
}
export default NotFound;
/*
import { useLocation } from "react-router-dom";
let location = useLocation();
<code>{location.pathname}</code> 
*/