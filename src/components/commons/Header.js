import React from "react";
import { Link } from "react-router-dom";
import "./css/generic.css";
const Header = (props) => {
    const title = props.title;
    return (
        <div className="navbar is-poli">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item is-size-3 has-text-weight-bold">
                    <img src="logo.png" height="28" alt="logo" className="mr-2 inverse"/>
                    {title}
                </Link>
            </div>
            
        </div>
            
    )
}

export default Header;