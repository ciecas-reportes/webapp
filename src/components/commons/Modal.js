import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modal/ModalContext';


const Modal = () => {

    const {showModal, modalTitle, setShowModal, setModalTitle} = useContext(ModalContext);

    const closeModal = () => {
        setShowModal(false);
        setModalTitle("");
    };

    return ( 

        <div className={`modal ${ showModal ? 'is-active' : '' }`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">
                        {modalTitle}
                    </p>
                    <button 
                        onClick={() => closeModal()}
                        className="delete" 
                        aria-label="close">    
                    </button>
                </header>
                <section className="modal-card-body">
                    Contenido
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-info">Save changes</button>
                    <button 
                        onClick={() => closeModal()}
                        className="button">
                            Cancel
                    </button>
                </footer>
            </div>
        </div>

     );
}
 
export default Modal;