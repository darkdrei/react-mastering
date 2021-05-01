import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { LoginScreen } from "../login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";


export const AppRouter = () => {

    const { user:{logged:isAthenticated }} = useContext(AuthContext);
    
    return (
        <Router>
            <div>
                <Switch>
                    {/*
                        Route normal para redireccionar
                        <Route exact path="/login" component= { LoginScreen }/>
                    */}
                    <PublicRouter 
                        exact
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ isAthenticated }
                    />
                    {/*
                        <Route path="/" component= { DashboardRoutes }/>
                        Forma de llamado normal de un Route
                    */}
                    {
                        /*
                        Implementacion de un router con validación de Rutas custom
                        */
                    }
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoutes } 
                        isAthenticated={isAthenticated}    
                    />
                </Switch>
            </div>
        </Router>
    )
}
