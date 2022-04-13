import React, { createContext, useReducer } from 'react';
import { GET_LIST, CREATE, GET_SINGLE, UPDATE, DELETE } from '../../const/actionTypes';
import ResearcherReducer from '../../reducers/researcherReducer';

import Axios from "axios";
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
            const response = await Axios.get("/researcher/");
            dispatch({
                type: GET_LIST,
                payload: response.data
            });
        } catch (error) {
            Toast.fire({ icon: "error", text: error, titleText :"El listado de Investigadores no está disponible." });
        }
    }
    // Obtener 1 investigador
    const getResearcher = async (researcher) => {
        try {
            let researcherFound = null;
            if(researcher !== null){
                const response = await Axios.get(`/researcher/${researcher.id}`);
                researcherFound = response.data;
            }
            dispatch({ type: GET_SINGLE, payload: researcherFound !== null ? researcherFound : "" });
        } catch (error) {
            Toast.fire({ icon: "error", text: error, titleText :"No ha sido posible obtenido el investigador." });
        }
    }
    // Crear 1 investifador
    const createResearcher = async (researcher) => {
        try {
            const response = await Axios.post("/researcher/", researcher);
            dispatch({ type: CREATE, payload: response.data });
            Toast.fire({ icon: "success", titleText :`Creación exitosa: ${response.data.name}.` });
        } catch (error) {
            Toast.fire({
                icon: "error", text: error,
                titleText :`Error en la creación: ${researcher.name}.` });
        }
    }
    // Actualizar investigador
    const updateResearcher = async (researcher) => {
        try {
            const response = await Axios.put(`/researcher/${researcher.id}`, researcher);
            dispatch({ type: UPDATE, payload: response.data });
            Toast.fire({ icon: "success", titleText :`Actualización exitosa: ${response.data.name} ${response.data.surname}.` });
        } catch (error) {
            Toast.fire({ icon: "error", text: error, titleText :`Error al actualizar a ${researcher.name}.`, });
        }
    }
    // Borrar por ID
    const deleteResearcher = async (researcher) => {
        try {
            Swal.fire({
                
                title: 'Eliminar',
                text: `¿ Realmente desea eliminar a ${researcher.name} ${researcher.surname} ?`,

                icon: 'warning', showCancelButton: true,
                confirmButtonColor: '#3085d6', cancelButtonColor: '#d33',
                confirmButtonText: 'Borrar'
                
              }).then( async (result) => {
                if (result.isConfirmed) {
                    await Axios.delete(`/researcher/${researcher.id}`);
                    dispatch({ type: DELETE, payload: researcher.id });
                    Toast.fire({ icon: "info", titleText :`${researcher.name} ha sido eliminad@.` });
                }
              });
            
        } catch (error) { 
            Toast.fire({ icon: "error", text: error, titleText :`Error al eliminar.` });
        }
    }

    return (
        <ResearcherContext.Provider value={{ 
            researchersList: state.researchersList, 
            currentResearcher: state.currentResearcher,
            getResearchersList, 
            getResearcher,
            createResearcher,
            updateResearcher,
            deleteResearcher
            }}>
            {props.children}
        </ResearcherContext.Provider>
    );
}