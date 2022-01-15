import React, { createContext, useReducer } from 'react';
import ResearcherReducer from '../../reducers/researcherReducer';

export const ResearcherContext = createContext();

export const ResearcherContextProvider = props => {
    const initialState = {
        researchersList: []
    }
    const [state, dispatch] = useReducer(ResearcherReducer, initialState);
};