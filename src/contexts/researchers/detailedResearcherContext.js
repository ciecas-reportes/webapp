import React, {useReducer, createContext, useState} from 'react';
import Swal from 'sweetalert2';
import { GET_SINGLE } from '../../const/actionTypes';
import DetailedResearcherReducer from '../../reducers/detailedResearcherReducer';
import Axios from 'axios';
import { getErrorMessage } from '../../utils/request/errorMessageProducer';
export const DetailedResearcherContext = createContext();

export const DetailedResearcherContextProvider = (props) => {
    const initialState = {
        detailedResearcher : null
    }
    const Toast = Swal.mixin({
        toast: true, position: 'top-end', showConfirmButton: false, timer: 5500, padding: '.6em', timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__jackInTheBox'
        },hideClass: {
            popup: 'animate__animated animate__slideOutUp'
        },didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      const [state, dispatch] = useReducer(DetailedResearcherReducer, initialState);
      const [loading, setLoading] = useState(true);

    // Obtener 1 investigador
    const getResearcher = async (id) => {
            let researcherFound = null;
            if(id !== null){
                setLoading(true);
                researcherFound = await Axios.get(`/researcherdetail/${id}`)
                    .then(({ data }) => data)
                    .catch((err) => { 
                        Toast.fire({ icon: "error", text: getErrorMessage(err), titleText :"No ha sido posible obtener el investigador." });
                        return null;
                    })
                    .finally(() => setLoading(false));
            }
            //await Axios /researcherdetail/6240b87d8805eb0f4405784a
            dispatch({ type: GET_SINGLE, payload: researcherFound !== null ? researcherFound : "" });
    }
    
    return (
        <DetailedResearcherContext.Provider value={{ 
            detailedResearcher: state.detailedResearcher,
            getResearcher,
            loading
            }}>
            {props.children}
        </DetailedResearcherContext.Provider>
    );

};