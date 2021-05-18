import React , { useContext } from 'react'
import { UserContext } from './UserContext'

function HomeScreen() {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>
            <pre className="">
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
}

export default HomeScreen
