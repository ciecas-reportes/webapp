import { GET_LIST, CREATE, GET_SINGLE } from "../const/actionTypes";

const initResearcherReducerOptions = (state, action) => {

    const options = {
        "default": state
    };
    // GET ALL
    options[GET_LIST] =  {...state, researchersList: action.payload};
    // NEW 
    options[CREATE] =  {...state, researchersList:[...state.researchersList, action.payload]};
    // GET SINGLE RESEARCHER
    options[GET_SINGLE] =  {...state, currentResearcher: action.payload};
    
    return options;
}

const ResearcherReducer = (state, action) => {
    
    const options = initResearcherReducerOptions(state, action);
    
    return (options[action.type]) ? options[action.type] : options["default"];
};
export default ResearcherReducer;