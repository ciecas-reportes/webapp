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
                <div className="field has-addons pr-3">
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Find a repository" />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                        Search
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </Layout> 
    );
}
 
export default Home;