import React, { useContext, useEffect } from 'react';
import TableRowResearchers from './TableRowResearchers';
import { ResearcherContext } from '../../contexts/researchers/researcherContext';
const TableResearchers = () => {

    // Obtenemos la propiedad del contexto superior
    const {researchersList, getResearchersList} = useContext(ResearcherContext);

    // Como el document.ready de jquery, es decir, cada que una pagina este lista o se renderice
    // esta funcion se ejecutara cada que se haga un cambio en su array de dependencias
    
    useEffect(() => {
        getResearchersList();
    }, []);

    // Si la lista esta vacia mostramos este contenido en lugar de desplegar la tabla
    if(researchersList.length === 0) return <center><p> No hay registros existentes. </p></center>

    // Elementos a renderizar
    return ( 

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

     );
}
 
export default TableResearchers;