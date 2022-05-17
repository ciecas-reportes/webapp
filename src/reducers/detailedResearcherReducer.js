import { GET_SINGLE } from "../const/actionTypes";
const initDetailedResearcherReducerOptions = (state, action) => {
    const options = {"default": state};
    options[GET_SINGLE] =  {...state, detailedResearcher: action.payload !== "" ? action.payload : null };
    return options;
};
const DetailedResearcherReducer = (state, action) => {
    const options = initDetailedResearcherReducerOptions(state, action);
    return (options[action.type]) ? options[action.type] : options["default"];
};
export default DetailedResearcherReducer;