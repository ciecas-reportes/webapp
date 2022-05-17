const TableRowGoogleArticles = ({article}) => {

    return (  
        <tr>
            <td>
                <a href={`${article.link}`} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </td>
            <td>
                {article.year}
            </td>
            <td>
                {article.publication}
            </td>
        </tr>
    );
}
 
export default TableRowGoogleArticles;