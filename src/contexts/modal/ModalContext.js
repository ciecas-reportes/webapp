import React, { createContext, useState } from 'react'
export const ModalContext = createContext();

export const ModalContextProvider = props => {
    
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    /* El contexto del modal debe ser compartido así como sus métodos */
    return (
        <ModalContext.Provider
            value={{
                showModal, modalTitle,
                setShowModal, setModalTitle
            }} 
        >
        {props.children}
        </ModalContext.Provider>
    );

};