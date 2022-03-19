import React, { createContext, useReducer } from 'react';
import { GET_LIST, CREATE, GET_SINGLE } from '../../const/actionTypes';
import ResearcherReducer from '../../reducers/researcherReducer';
const { v4: uuidv4 } = require('uuid');

export const ResearcherContext = createContext();
export const ResearcherContextProvider = props => {
    // Valor inicial de la lista (default)
    const initialState = {
        researchersList: [],
        currentResearcher: null
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

    const createResearcher = (researcher) => {

        researcher.id=uuidv4();
        dispatch({
            type: CREATE,
            payload: researcher
        });
    }

    const getResearcher = (researcher) => {

        researcher.id=uuidv4();
        dispatch({
            type: GET_SINGLE,
            payload: researcher
        });
    }

    return (
        <ResearcherContext.Provider value={{ 
            researchersList: state.researchersList, 
            currentResearcher: state.currentResearcher,
            getResearchersList, 
            createResearcher,
            getResearcher
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