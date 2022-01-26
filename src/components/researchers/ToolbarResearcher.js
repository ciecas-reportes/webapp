import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/modal/ModalContext';
const ToolbarResearcher = () => {
    const {setShowModal, setModalTitle} = useContext(ModalContext);

    return ( 
        <div className="level">
                <button 
                    onClick={()=>{
                        setShowModal(true);
                        setModalTitle("Nuevo investigador");
                    }}
                    className="button is-info level-right">
                        <span className="icon level-item mr-4">
                            <i className="fas fa-plus"></i>
                        </span>
                    Agregar
                </button>
            </div>
     );
}
 
export default ToolbarResearcher;