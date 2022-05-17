import React, {useContext, useEffect} from 'react';
import { DetailedResearcherContext } from '../../../contexts/researchers/detailedResearcherContext';
import ProgressBarInfinite from '../../commons/ProgressBarInfinite';
import TableGoogleArticles from './TableGoogleArticles';

const CardDetailedResearcher =  (props) => {
    
    const {detailedResearcher, getResearcher, loading} = useContext(DetailedResearcherContext);
    
    useEffect( () => {
        getResearcher(props.id);
        // eslint-disable-next-line
    }, []);
    
    if(detailedResearcher !== null){
        return (
            <div>
                    <section className="section mt-0 p-0 pl-5">
                                <div className="card-content pt-0">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{detailedResearcher.name} {detailedResearcher.surname}</p>
                                            <p className="subtitle is-6">
                                                {detailedResearcher.email}
                                                {detailedResearcher.idGoogleScholar ? <span className="tag is-success is-light ml-2">{detailedResearcher.idGoogleScholar}</span> : ""}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </section> 
                        <section className="section m-0 pt-0">
                            {(!!detailedResearcher.googleArticles) ? <TableGoogleArticles articles={detailedResearcher.googleArticles}/> : ""}
                        </section>
            </div>
        );
    }else{
        return (loading ? <ProgressBarInfinite loading={loading} /> : <div>No se ha encontrado el investigador</div>);
    }

}
 
export default CardDetailedResearcher;