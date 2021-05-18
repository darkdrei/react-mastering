import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom' 
import { login, starGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
    const { loading } = useSelector( state => state.ui );
    const dispatch = useDispatch();/* Sirve para hacer dispact de aciones */
    console.log('Estos es el loading -> ', loading);
    const [formValues, handleInputChange, reset ] = useForm({
        email:'darkdrei88@gmail.com',
        password:'123456',
    });

    const { email, password } = formValues;

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        //dispatch( login(123456, 'darkdrei88') );
        dispatch( startLoginEmailPassword(email, password) );
    }

    const handleGoogleLogin = () => {
        dispatch( starGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ email }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={ handleInputChange }
                    value={ password }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled= { loading }
                >
                    Login
                </button>

                <div className="auth__social-networks_">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b> Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
