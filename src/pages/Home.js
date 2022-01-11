import React from 'react'
import Layout from '../components/commons/Layout';
const Home = () => {
    return ( 
    <Layout>
        <div className="columns is-vcentered">
            <div className="column">
                <div className="block mt-4">
                    <h4 className="title is-4">Buscar</h4>
                </div>
                <div className="field">
                    <div className="control is-large">
                        <input className="input is-large" type="text" placeholder="tema de interés"/>
                    </div>
                </div>
            </div>
        </div>
        
    </Layout> 
    );
}
 
export default Home;