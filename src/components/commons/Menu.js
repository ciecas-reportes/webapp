import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 

        <nav className="panel">
            <p className="panel-heading">
                Menu
            </p>
            <div className="panel-block">
                <Link to="/" className="button is-fullwidth">
                    <span className="icon">
                    <i className="fas fa-home"></i>
                    </span>
                    <span>
                        Inicio
                    </span>
                </Link>
            </div>
            
            <div className="panel-block">
                <Link to="/researchers" className="button is-fullwidth">
                    <span className="icon">
                    <i className="fas fa-address-book"></i>
                    </span>
                    <span>
                        Investigadores
                    </span>
                </Link>
            </div>

        </nav>

     );
}
 
export default Menu;
/*
            <div className="panel-block">
                <Link to="/organizations" className="button is-fullwidth">
                    <span className="icon">
                    <i className="fas fa-building"></i>
                    </span>
                    <span>
                        Organizaciones
                    </span>
                </Link>
            </div>
            */