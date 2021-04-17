import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'


export const SimpleWithHookCustomForm = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('El email cambio.')
        
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log(formValues);
    }

    
    return (
        <form onSubmit={ handleSubmit }>
          <h1>SimpleWithHookCustomForm</h1>  
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
            </div>
            <div>
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
          <div>
                <input 
                    type="password"
                    name="password"
                    className="form-control input"
                    placeholder="******"
                    value={ password }
                    onChange={ handleInputChange }
                />
          </div>
          <div>
              <button className="btn btn-primary" type="submit">
                  Guardar
              </button>
          </div>
        </form>
    )
}
