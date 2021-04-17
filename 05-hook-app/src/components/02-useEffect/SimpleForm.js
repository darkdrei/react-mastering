import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        //console.log('Hola...');
    },[]);

    useEffect( () => {
        //console.log('Formulario cambio...');
    }, [formState]);

    useEffect( () => {
        //console.log('Email cambio...');
    }, [email]);

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setFormState({
            ...formState,
             [target.name] : target.value
        })
    }
    
    return (
        <>
          <h1>UseEffect</h1>  
          <hr/>
          <div className="form-group">
              <input 
                type="text"
                name="name"
                className="form-control input"
                autoComplete="off"
                placeholder="Your name"
                value={ name }
                onChange={ handleInputChange }
              />
            <input 
                type="text"
                name="email"
                className="form-control input"
                autoComplete="off"
                placeholder="Your email"
                value={ email }
                onChange={ handleInputChange }
              />
          </div>
          { (name == '123') && <Message></Message> }
        </>
    )
}
