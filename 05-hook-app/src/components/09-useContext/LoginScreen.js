import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    //. Obtener la referencia al context
    //2. SetUset, crear boton que haga login -> funcion que llamae setUser
    const { user, setUser } = useContext(UserContext);
    return (
        <div>
            <h1>LoginScrenn</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() => setUser({...user,id:123, name:'Eugenio'})}
            >
                Login
            </button>
        </div>
    )
}
