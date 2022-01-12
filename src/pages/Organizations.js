import React from 'react'
import Layout from '../components/commons/Layout';
import Modal from '../components/commons/Modal';
import TableOrganizations from '../components/organizations/TableOrganizations';
//import ToolbarOrganization from '../components/organizations/ToolbarOrganization';
import { ModalContextProvider } from '../contexts/modal/ModalContext';

const Organizations = () => {
    return ( 
        
    <Layout>
        <ModalContextProvider>
            <div className="panel">
                <div className="panel-heading">
                    Organizaciones
                </div>
            </div>    

            <div className="box">
                {/*<ToolbarOrganization/>*/}
                <TableOrganizations/>
            </div>
            <Modal/>
        </ModalContextProvider>
    </Layout> 
    
    );
}
 
export default Organizations;