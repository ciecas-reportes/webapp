import React, { useState } from 'react';
import TableRowOrganizations from './TableRowOrganizations';
const TableOrganizations = () => {

    const [organizationsList, setOrganizationsList] = useState(
        [
            {
            "id": 0,
            "name": "pepita"
            },
            {
                "id": 1,
                "name": "palanqueta"
            }
        ]
    );

    return ( 

        <div className="table-container">
            <table className="table is-hoverable is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
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