import React, { createContext, useReducer } from 'react';
import { GET_LIST, ADD } from '../../const/actionTypes';
import ResearcherReducer from '../../reducers/researcherReducer';
export const ResearcherContext = createContext();
export const ResearcherContextProvider = props => {
    // Valor inicial de la lista (default)
    const initialState = {
        researchersList: []
    };
    // Evitamos hacer componentes enormes con logica complicada con ayuda de los reducers
    const [state, dispatch] = useReducer(ResearcherReducer, initialState);

    const getResearchersList = () => {

        const rl =[
                {
                "id": 1,
                name: "Gybran", surname: "Perez", email: "gybranperez@gmail.com", idGoogleScholar: ""
                },
                {
                    "id": 2,
                    name: "Juan", surname: "Perez", email: "jcperez@gmail.com", idGoogleScholar: ""
                }
            ];

        dispatch({
            type: GET_LIST,
            payload: rl
        });
    }

    const addResearcher = (researcher) => {

        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < 10; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        researcher.id=result
        dispatch({
            type: ADD,
            payload: researcher
        });
    }

    return (
        <ResearcherContext.Provider value={{ 
            researchersList: state.researchersList, getResearchersList, addResearcher
            }}>
            {props.children}
        </ResearcherContext.Provider>
    );
}

    /*
    const [researchersList, setResearchersList] = useState(
        [
            {
            "id": 1,
            name: "Gybran", surname: "Perez", email: "gybranperez@gmail.com", idGoogleScholar: ""
            },
            {
                "id": 2,
                name: "Juan", surname: "Perez", email: "jcperez@gmail.com", idGoogleScholar: ""
            }
        ]
    );
    */