import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const Layout = () => {
    
    const { counter , increment, decrement, reset} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { data } = state;
    const { author , quote } = !!data && data[0];
    console.log( state );
    const [boxSize, setBoxSize] = useState({});
    const pTag = useRef()

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
    }, [quote]);

    return (
        <div>
            <h1>BreakingBad Quotes!!!</h1>
            <hr/>

            <blockquote className="blockquote text-center">
                <p className="mb-0" ref={ pTag }> { quote }</p>
                <footer className="blockquote-footer">{ author }</footer>
            </blockquote>

            
            <hr/>
            <pre> { JSON.stringify( boxSize)}</pre>
            <button className="btn btn-primary"
                    onClick={ increment }
            >
                Siguiente quote
            </button>
        </div>
    )
}
