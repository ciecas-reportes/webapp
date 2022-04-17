import React from 'react'
import Layout from '../components/commons/Layout';
import { useParams } from "react-router-dom";
import { ResearcherContextProvider } from '../contexts/researchers/researcherContext';
const ResearcherDetail = () => {

    let { id } = useParams();

    return ( 
        
    <Layout>
        <ResearcherContextProvider>
            <div className="panel">
                <div className="panel-heading">
                    Detalle Investigador: {id}
                </div>
            </div>   
        </ResearcherContextProvider>
    </Layout> 
    
    );
}
 
export default ResearcherDetail;