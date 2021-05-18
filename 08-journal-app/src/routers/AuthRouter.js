import React from 'react'
import { Route, 
        BrowserRouter as Router, 
        Switch, 
        Redirect} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { JournalScreen } from '../components/journal/JournalScreen'


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        path="/auth/login"
                        component={ LoginScreen }
                    />
                    <Route 
                        exact  
                        path="/auth/register"
                        component={ RegisterScreen }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    )
}
