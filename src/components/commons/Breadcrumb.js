import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = (props) => {
    const list = (props.breadcrumbItems ) ? props.breadcrumbItems : [];

    if(list.length === 0) return <br/>

    return (
        <section className="section">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    { list.map(item => (
                        <li key={item.name}>
                            <Link to={item.to}>
                                {(item.icon) ? <span className="icon"><i className={"fas " + item.icon}></i></span> : ""}
                                <span>
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
            
    )
}

export default Breadcrumb;