import React, { useState } from 'react';
import './gitexpertapp.css'
import '../../index.css'
import { AddCategory } from '../category/AddCategory'
import { GitGrid } from '../category/GitGrid'


const GitExpertApp = () =>{

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One punch'])

    /*const handleAdd = (event) =>{
       // setCategories([...categories, 'Hola mundo']);
        // Esta es una forma de manejar un callback
        setCategories(catgs =>[...catgs, 'Hola mundo']);
    }*/

    return(
        <div>
            <h2>
            GitExpertApp
            </h2>
            <hr></hr>
            <AddCategory setCategories= { setCategories }/>
            {/*<button onClick={ handleAdd }>Agregar</button>*/}
            <ol>
                {
                    categories.map((category) => <GitGrid key={ category } category={ category }/>)
                }
            </ol>
            
        </div>
    )
}

export default GitExpertApp;