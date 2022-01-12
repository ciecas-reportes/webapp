import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modal/ModalContext';
const TableRowOrganizations = ({organization}) => {

    const {setShowModal, setModalTitle} = useContext(ModalContext);
    const openModalUpdateOrganization = () => {
        setModalTitle("Actualizar Organización");
        setShowModal(true);
    };

    const openModalDeleteOrganization = () => {
        setModalTitle("Borrar Organización");
        setShowModal(true);
    };

    return (  
        <tr>
            <td>
                {organization.name}
            </td>
            <td>
                <div className="buttons">
                    <button 
                        onClick={() => openModalUpdateOrganization()}    /*Function to display the update form*/
                        className="button is-info is-small mr-4" 
                        title='Edit'>
                            <span className="icon">
                                <i className="fas fa-pen"></i>
                            </span>
                    </button>
                    <button 
                        onClick={() => openModalDeleteOrganization()}    /*Function to display the delete form*/
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
 
export default TableRowOrganizations;