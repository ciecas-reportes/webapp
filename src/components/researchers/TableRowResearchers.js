import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modal/ModalContext';
import { ResearcherContext } from '../../contexts/researchers/researcherContext';
import { Link } from "react-router-dom";
const TableRowResearchers = ({researcher}) => {

    const {setShowModal, setModalTitle} = useContext(ModalContext);
    const {getResearcher, deleteResearcher} = useContext(ResearcherContext);
    const openModalUpdateResearcher = () => {
        getResearcher(researcher);
        setModalTitle("Actualizar Investigador");
        setShowModal(true);
    };

    /* 
    //Date format you have 
    let date = new Date(researcher.dateModified);
    //Date converted to MM-DD-YYYY format 
    let dateModified = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    */


    return (  
        <tr>
            <td>
                <Link to={`/researcher/${researcher.id}`}>{researcher.name} {researcher.surname}</Link>
            </td>
            <td>
                {researcher.email}
            </td>
            <td>
                <div className="buttons">
                    <button 
                        onClick={() => openModalUpdateResearcher()}    /*Function to display the update form*/
                        className="button is-info is-small mr-4" 
                        title='Edit'>
                            <span className="icon">
                                <i className="fas fa-pen"></i>
                            </span>
                    </button>
                    <button 
                        onClick={() => deleteResearcher(researcher)}    /*Function to display the delete form*/
                        className="button is-danger is-small" 
                        title='Delete'>
                            <span className="icon">
                                <i className="fas fa-trash-alt"></i>
                            </span>
                    </button>
                </div>
            </td>
        </tr>
    );
}
 
export default TableRowResearchers;