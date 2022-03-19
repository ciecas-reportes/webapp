import React, { useContext } from 'react';
import { useForm  } from 'react-hook-form';
import { useEffect } from 'react/cjs/react.production.min';
import { ModalContext } from '../../contexts/modal/ModalContext';
import { ResearcherContext } from '../../contexts/researchers/researcherContext';
const FormResearcher = () => {
    
    const {setShowModal, setModalTitle } = useContext(ModalContext);

    const {createResearcher, currentResearcher} = useContext(ResearcherContext);

    const researcherDefault = {
        id: "", name: "", surname: "", email: "", idGoogleScholar: ""
    }
    /*      
        registro de campos de form, función que se ocupa de el envio del form cuando todo es correcto,
        estados de error del formulario por si alguna validación no se cumple,
    */
    const { register, handleSubmit, reset, setValue,  formState: { errors }, clearErrors } = useForm({
        defaultValues: researcherDefault,
        mode: "onChange"
    });


    const onSubmit = (data, e) => {
        // validar
        if(data.id === "") delete data.id;
        if(data.idGoogleScholar === "") delete data.idGoogleScholar;
        createResearcher(data);
        // cerrar modal
        closeModal();
        
    };

    useEffect(() => {
      
        if (currentResearcher !== null) {
            setValue([
                
                { id: currentResearcher.id },
                { name: currentResearcher.name },
                { surname: currentResearcher.surname }, 
                { email: currentResearcher.email }, 
                { idGoogleScholar: currentResearcher.idGoogleScholar }
                
            ]);
        }else{
            reset(researcherDefault);
        }

    }, [currentResearcher]);
    
    
    const closeModal = () => {
        setShowModal(false);
        setModalTitle("");
        reset(
            { values: researcherDefault }, 
            {}
        );
        clearErrors();

    };


    return (
        <form onSubmit={handleSubmit( onSubmit )}>
            <input
                            autoComplete="off"
                            className="input"
                            type="hidden"
                            placeholder="Nombre"
                            {...register("id", {})}
                        />
            <div className="field">
                <label className="label">Nombre</label>
            </div>
            <div className="field is-horizontal">
                
                <div className="field-body">
                    <div className="field">
                        <p className="control is-expanded has-icons-left">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            {...register("name", { 
                                required: "Este campo es obligatorio",
                                minLength: {
                                    value: 3,
                                    message: "El campo debe tener al menos 3 caracteres"}
                            })}
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user"></i>
                        </span>
                        </p>


                        <p className="has-text-danger has-text-weight-medium">
                                {errors.name?.message}
                        </p>


                    </div>
                    <div className="field">
                        <p className="control is-expanded">
                        <input
                            autoComplete="off"
                            className="input"
                            type="text"
                            placeholder="Apellidos"
                            {...register("surname", { 
                                required: "Este campo es obligatorio",
                                minLength: {
                                    value: 4,
                                    message: "El campo debe tener al menos 4 caracteres"}
                            })}
                        />
                        </p>

                        <p className="has-text-danger has-text-weight-medium">
                                {errors.surname?.message}
                        </p>
                    </div>
                </div>
            </div>


            <div className="field">
                <label className="label">Correo</label>
                <div className="control has-icons-left">
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="e.g. joakingon@ipn.mx" 
                        {...register("email", { 
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                message:"El formato de email no es válido"},
                            minLength: {
                                value: 5,
                                message: "El campo debe tener al menos 5 caracteres"}
                        })}/>
                    <span className="icon is-small is-left">
                        <i className="fa fa-envelope"></i>
                    </span>
                </div>

                <p className="has-text-danger has-text-weight-medium">
                    {errors.email?.message}
                </p>


            </div>
            <div className="field">
                <label className="label">id Google Académico</label>
                <div className="control has-icons-left">
                    <input type="text" 
                        className="input" 
                        placeholder="e.g. SsQZsMcAAAAJ" 
                        {...register("idGoogleScholar", { 
                        })}/>
                    <span className="icon is-small is-left">
                        <i className="fa fa-goodreads"></i>
                    </span>
                </div>
            </div>
            <div className="levels">
                <div className="level-right">
                    <div className="level-item">
                        <div className="buttons are-medium has-text-centered">
                            <button type="submit" className="button is-info mr-1">
                                <span>Guardar</span>
                            </button>
                            <button
                                type="reset"
                                className="button"
                                onClick={ () => closeModal() }
                            >
                                <span>
                                    Cancelar
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                    
        </form>
    );
};
export default FormResearcher;