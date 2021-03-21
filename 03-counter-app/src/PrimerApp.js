//import React, {Fragment} from "react";
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, subtitulo}) =>{
    /*if(!saludo){
        throw new Error('El saludo es requerido')
    }*/

    return( 
        <>
           <h1>{ saludo}</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo'
}
export default PrimeraApp;