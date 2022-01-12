import React from 'react'
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import FormResearcher from '../components/researchers/FormResearcher';
import TableResearchers from '../components/researchers/TableReseachers';
import ToolbarResearcher from '../components/researchers/ToolbarResearcher';
import { ModalContextProvider } from '../contexts/modal/ModalContext';
const Researchers = () => {
    return ( 
        
    <Layout>
        <ModalContextProvider>
            <div className="panel">
                <div className="panel-heading">
                    Investigadores
                </div>
            </div>    

            <div className="box">
                <ToolbarResearcher/>
                <TableResearchers/>
            </div>
            <Modal>
                <FormResearcher/>
            </Modal>
        </ModalContextProvider>
    </Layout> 
    
    );
}
 
export default Researchers;