import React, { useState } from 'react';
import TableRowOrganizations from './TableRowOrganizations';
const TableOrganizations = () => {

    const [organizationsList] = useState(
        [
            {
            "id": 1,
            "name": "ciecas"
            },
            {
            "id": 2,
            "name": "escom"
            }
        ]
    );

    return ( 

        <div className="table-container">
            <table className="table is-hoverable is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    { organizationsList.map(organization => (
                        <TableRowOrganizations organization={organization} key={organization.id}/>
                    ))}
                </tbody>
            </table>
        </div>

     );
}
 
export default TableOrganizations;