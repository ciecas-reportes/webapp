import React from 'react';
import TableRowGoogleArticles from './TableRowGoogleArticles';

const TableGoogleArticles = (props) => {
    const articlesList = props.articles ? props.articles.sort((a, b) => a.year > b.year ? -1 : 1) : [];
    // Si la lista esta vacia mostramos este contenido en lugar de desplegar la tabla
    if(articlesList.length === 0) return "";

    // Elementos a renderizar
    return ( 
        
        <div className="table-container">
            <table className="table is-hoverable is-striped is-fullwidth">
                <thead className='is-dark'>
                    <tr>
                        <th>Artículo Google Académico</th>
                        <th>Año</th>
                        <th>Publicación</th>
                    </tr>
                </thead>
                <tbody>
                    { articlesList.map(article => (
                        <TableRowGoogleArticles
                            article={article} 
                            key={`${article.title.replace(/\s+/g, '').concat(article.link)}`}
                        />
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default TableGoogleArticles;