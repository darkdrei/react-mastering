import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './examples.css'

export const MultipleCustomHooks = () => {
    
    const { counter , increment, decrement, reset} = useCounter(1);
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { loading, data } = state;
    const { author , quote } = !!data && data[0];
    console.log( state );

    return (
        <div>
            <h1>BreakingBad Quotes!!!</h1>
            <hr/>
            {
                loading ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-center">
                            <p className="mb-0"> { quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }
            <hr/>
            <button className="btn btn-primary"
                    onClick={ increment }
            >
                Siguiente quote
            </button>
        </div>
    )
}
