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
            <h3>{ subtitulo }</h3>
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