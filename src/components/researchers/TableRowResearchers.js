import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modal/ModalContext';
const TableRowResearchers = ({researcher}) => {

    const {setShowModal, setModalTitle} = useContext(ModalContext);
    const openModalUpdateResearcher = () => {
        setModalTitle("Actualizar Investigador");
        setShowModal(true);
    };

    const openModalDeleteResearcher = () => {
        alert("borrado");
    };

    return (  
        <tr>
            <td>
                {researcher.name} {researcher.surname}
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
                        onClick={() => openModalDeleteResearcher()}    /*Function to display the delete form*/
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