import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { setError, removeError } from '../../actions/ui'
import { startRegisterWithEmailPassword } from '../../actions/auth'
export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );
    /**
     * {
     *  name: 'Eugenio',
     *  email: 'darkdrei88@gmail.com',
     *  password: '123456',
     *  password2: '123456'
     * }
     * 
     * //useForm
     * Crear -> handleRegister = () =>{ imprimir valores }
     */
    const [ formValue, handleInputChange, reset ] = useForm({
        name: 'Eugenio',
        email: 'darkdrei88@gmail.com',
        password: '123456',
        password2: '123456',
    });

    const { name, email , password, password2 } = formValue;
    
    const handleRegister = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if( isFormValid()){
            dispatch( startRegisterWithEmailPassword(email, password, name));
        }
        
    }

    const isFormValid = () =>{
        if(name.trim().length === 0){
            dispatch( setError('Name is required') );
            return false;
        }else if(!validator.isEmail( email )){
            dispatch( setError('Email is required.') );
            return false;
        }else if(password.trim().length === 0){
            dispatch( setError('Password is required.') );
            return false;
        }else if(password2.trim().length === 0){
            dispatch( setError('Password2 is required.') );
            return false;
        }else if(password2 !== password){
            dispatch( setError('Password should match other.') );
            return false;
        }else if(password?.length <5 ){
            dispatch( setError('Password should be at least 6 characters.' ) );
            return false;
        }
        dispatch( removeError() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>
                {
                    msgError !== null && (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>)
                }
                <input    
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                    value={ name }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange= { handleInputChange }
                    value={ email }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange= { handleInputChange }
                    value={ password }
                />
                <input
                    type="password"
                    placeholder="Confirm"
                    name="password2"
                    className="auth__input"
                    onChange= { handleInputChange }
                    value={ password2 }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Login
                </button>

               
                <Link 
                    to="/auth/login"
                    className="link mt-5"
                >
                    Alreay registed?
                </Link>
            </form>
        </>
    )
}
