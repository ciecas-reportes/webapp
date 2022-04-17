import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/modal/ModalContext';
import { ResearcherContext } from '../../contexts/researchers/researcherContext';
const ToolbarResearcher = () => {
    
    const {setShowModal, setModalTitle} = useContext(ModalContext);

    const {getResearcher} = useContext(ResearcherContext);

    return ( 
        <div className="level">
                <button 
                    onClick={()=>{
                        setShowModal(true);
                        setModalTitle("Nuevo investigador");
                        getResearcher(null);
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