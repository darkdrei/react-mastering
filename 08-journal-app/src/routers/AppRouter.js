import React, { useEffect, useState } from 'react'
import firebase from "firebase/app";
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if(user?.uid){
                dispatch( login( user.uid, user.displayName ));
                setIsLoggedIn( true );
            }else{
                setIsLoggedIn(false);
            }
            setChecking( false );
        });
    }, [dispatch, setChecking, setIsLoggedIn ]);

    if ( checking ){
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <>
                <Switch>
                    <PublicRouter
                        path='/auth'
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />
                    <PrivateRouter
                        path='/'
                        component={ JournalScreen }
                        isAuthenticated={ isLoggedIn } 
                    />
                    <Redirect to="/auth/login" />
                </Switch>

            </>
        </Router>

    )
}

