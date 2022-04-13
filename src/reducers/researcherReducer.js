import { GET_LIST, CREATE, GET_SINGLE, UPDATE, DELETE } from "../const/actionTypes";

const initResearcherReducerOptions = (state, action) => {

    const options = {
        "default": state
    };
    // GET ALL
    options[GET_LIST] =  {...state, researchersList: action.payload};
    // NEW 
    options[CREATE] =  {...state, researchersList:[ action.payload , ...state.researchersList ]};
    // GET SINGLE RESEARCHER
    options[GET_SINGLE] =  {...state, currentResearcher: action.payload !== "" ? action.payload : null };
    // UPDATE 
    options[UPDATE] =  {...state, researchersList:state.researchersList.map(
        r => r.id === action.payload.id ? action.payload : r
    )};
    // DELETE
    options[DELETE] =  {
            ...state, 
            researchersList: state.researchersList.filter( r => r.id !== action.payload )
    };

    return options;
}

const ResearcherReducer = (state, action) => {
    
    const options = initResearcherReducerOptions(state, action);
    
    return (options[action.type]) ? options[action.type] : options["default"];
};
export default ResearcherReducer;