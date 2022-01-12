import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/modal/ModalContext';


const Modal = (props) => {

    const {showModal, modalTitle, setShowModal, setModalTitle} = useContext(ModalContext);

    return ( 

        <div className={`modal ${ showModal ? 'is-active' : '' }`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head has-background-dark">
                    <p className="modal-card-title has-text-weight-bold has-text-white-ter">
                        {modalTitle}
                    </p>
                    <button 
                        onClick={() => {
                            setShowModal(false);
                            setModalTitle("");
                        }}
                        className="delete" 
                        aria-label="close">    
                    </button>
                </header>
                <section className="modal-card-body">
                    {props.children}
                </section>
            </div>
        </div>

     );
}
 
export default Modal;