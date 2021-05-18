import { useState } from 'react'

export const useForm = ( initialState ) => {
    const [values, setValues] = useState(initialState);

    /**
     * Se recibe como parametro el destructurado del evento
     * @param { Object } target: contine la etiqueta del input que cambia 
     */
    const handleInputChange = ({ target }) => {
        setValues({
            ...values, [target.name]:target.value
        });
    }

    const reset = () =>{
        setValues( initialState );
    }

    return [ values, handleInputChange, reset ];
}
