import React, { useState } from 'react';
import TableRowResearchers from './TableRowResearchers';
const TableResearchers = () => {

    const [researchersList, setResearchersList] = useState(
        [
            {
            "id": 1,
            "name": "Peter"
            },
            {
                "id": 2,
                "name": "Joaquin"
            }
        ]
    );

    return ( 

        <div className="table-container">
            <table className="table is-hoverable is-striped is-fullwidth">
                <thead className='is-dark'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
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