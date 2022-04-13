import React from 'react';


// Components
import Header from "./Header";
import Menu from "./Menu";
import Footer from './Footer';

const Layout = (props) => {
    const body = props.children;
    return ( 
    <div>
        <Header title="CIECAS Reportes"/>
        <div className="container is-widescreen">
            <div className="columns">
                <div className="column is-one-quarter">
                    <Menu/>
                </div>
                <div className="column">
                    {body}
                </div>
            </div>
        </div>
        
        <Footer/>
    </div> 
    );
}
 
export default Layout;