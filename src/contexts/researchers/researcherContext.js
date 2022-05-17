import React, { createContext, useReducer, useState } from 'react';
import { GET_LIST, CREATE, GET_SINGLE, UPDATE, DELETE } from '../../const/actionTypes';
import ResearcherReducer from '../../reducers/researcherReducer';

import { getErrorMessage } from '../../utils/request/errorMessageProducer';

import Axios from 'axios';
import Swal from 'sweetalert2';

export const ResearcherContext = createContext();
export const ResearcherContextProvider = props => {
    // Valor inicial de la lista (default)
    const initialState = {
        researchersList: [],
        currentResearcher: null
    };
    // Evitamos hacer componentes enormes con logica complicada con ayuda de los reducers
    const [state, dispatch] = useReducer(ResearcherReducer, initialState);
    // Estado que usaremos para habilitar la barra de "Cargando" mientras se hace una petición
    const [loading, setLoading] = useState(false);
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

    // Obtener TODA la lista
    const getResearchersList = async () => {
        
        try {
            setLoading(true);
            const response = await Axios.get("/researcher/");
            dispatch({
                type: GET_LIST,
                payload: response.data
            });
            
        } catch (err) {
            Toast.fire({ icon: "error", text: getErrorMessage(err), titleText :"El listado de Investigadores no está disponible." });
        }finally{
            setLoading(false);
        }
    }
    // Obtener 1 investigador
    const getResearcher = async (researcher) => {

            let researcherFound = (researcher !== null) ? await Axios.get(`/researcher/${researcher.id}`)
                    .then( (response) => {
                        return response.data;
                    }).catch((err) => {
                        Toast.fire({ icon: "error", text: getErrorMessage(err), titleText :"No ha sido posible obtenido el investigador." });
                        return null;
                    }) : null;
            dispatch({ type: GET_SINGLE, payload: researcherFound !== null ? researcherFound : "" });
    }
    // Crear 1 investifador
    const createResearcher = async (researcher) => {
            setLoading(true);
            await Axios.post("/researcher/", researcher)
                .then((response) => {
                    Toast.fire({ icon: "success", titleText :`Creación exitosa: ${response.data.name}.` });
                    dispatch({ type: CREATE, payload: response.data });
                    
                }).catch((err)=>{
                    Toast.fire({ icon: "error", text: getErrorMessage(err), titleText :"No ha sido posible obtener el investigador." });
                    return null;
                }).finally(()=>setLoading(false));
            
    }
    // Actualizar investigador
    const updateResearcher = async (researcher) => {
        await Axios.put(`/researcher/${researcher.id}`, researcher)
        .then((response) => {

            dispatch({ type: UPDATE, payload: response.data });
            Toast.fire({ icon: "success", titleText :`Actualización exitosa: ${response.data.name} ${response.data.surname}.` });
        }).catch((err) => {
            Toast.fire({ icon: "error", text: getErrorMessage(err), titleText :`Error al actualizar a ${researcher.name}.`, });
        });
    }
    // Borrar por ID
    const deleteResearcher = async (researcher) => {
            Swal.fire({
                
                title: 'Eliminar',
                text: `¿ Realmente desea eliminar a ${researcher.name} ${researcher.surname} ?`,

                icon: 'warning', showCancelButton: true,
                confirmButtonColor: '#3085d6', cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar'
                
              }).then( async (result) => {
                if (result.isConfirmed) {
                    await Axios.delete(`/researcher/${researcher.id}`).then(() => {

                        dispatch({ type: DELETE, payload: researcher.id });
                        Toast.fire({ icon: "info", titleText :`${researcher.name} ha sido eliminad@.` });

                    }).catch((err) => {
                        Toast.fire({ icon: "error", text: getErrorMessage(err), titleText :`Error al eliminar.` });

                    });
                }
              });
    }

    return (
        <ResearcherContext.Provider value={{ 
            researchersList: state.researchersList, 
            currentResearcher: state.currentResearcher,
            getResearchersList, 
            getResearcher,
            createResearcher,
            updateResearcher,
            deleteResearcher,
            loading, setLoading
            }}>
            {props.children}
        </ResearcherContext.Provider>
    );
}