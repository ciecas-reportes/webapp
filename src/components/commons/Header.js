import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
    const title = (props.title ) ? props.title : "CIECAS Reportes";
    return (
        <div className="navbar is-poli">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item is-size-3 has-text-weight-bold">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} height="28" alt="logo" className="mr-2 inverse"/>
                    {title}
                </Link>
            </div>
            
        </div>
            
    )
}

export default Header;