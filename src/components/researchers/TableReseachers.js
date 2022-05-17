import React, { useContext, useEffect } from 'react';
import TableRowResearchers from './TableRowResearchers';
import { ResearcherContext } from '../../contexts/researchers/researcherContext';
import ProgressBarInfinite from "../commons/ProgressBarInfinite";
const TableResearchers = () => {

    // Obtenemos la propiedad del contexto superior
    const {researchersList, getResearchersList, loading} = useContext(ResearcherContext);
    // Como el document.ready de jquery, es decir, cada que una pagina este lista o se renderice
    // esta funcion se ejecutara cada que se haga un cambio en su array de dependencias
    
    useEffect(() => {
        getResearchersList()
        // eslint-disable-next-line
    }, []);
    if(loading) {
        return <ProgressBarInfinite loading={(loading)}/>
    } else if(researchersList.length === 0 && loading === false) { 
        return <center><p> No hay registros existentes. </p></center>
    }
    // Si la lista esta vacia mostramos este contenido en lugar de desplegar la tabla
    

    // Elementos a renderizar
    return ( 
        <div>
            <div className="table-container">
                <table className="table is-hoverable is-striped is-fullwidth">
                    <thead className='is-dark'>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { researchersList.map(researcher => (
                            <TableRowResearchers researcher={researcher} key={researcher.id}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default TableResearchers;