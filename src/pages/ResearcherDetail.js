import React from 'react'
import Layout from '../components/commons/Layout';
import { useParams } from "react-router-dom";
import NotFound from '../components/commons/404';
import Breadcrumb from '../components/commons/Breadcrumb';
import {DetailedResearcherContextProvider } from '../contexts/researchers/detailedResearcherContext';
import CardDetailedResearcher from '../components/researchers/detail/CardDetailedResearcher';
const ResearcherDetail = () => {

    let { id } = useParams();

    if(!id) return <NotFound />;
    


    const breadcrumbItemsList = [
        {name:"Inicio", to:"/", icon:"fa-home"}, {name:"Investigadores", to:"/researchers"}
    ];

    return ( 
        <Layout>
            <DetailedResearcherContextProvider>
                <Breadcrumb breadcrumbItems={breadcrumbItemsList}/>
                <CardDetailedResearcher id={id}></CardDetailedResearcher>
            </DetailedResearcherContextProvider>
        </Layout> 
    
    
    );
}
 
export default ResearcherDetail;
/*
<Layout>
            <div classNameName="panel">
                <div classNameName="panel-heading">
                    Detalle Investigador: {id}
                </div>
            </div>
    </Layout> 
*/