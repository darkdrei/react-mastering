import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import '../../index.css'
//import { getGifs } from '../../helpers/getGifs'

export const GitGrid = ({ category }) => {
    const { loading, data:images } = useFetchGifs( category );
    /*const [images, setImages] =useState([]);

    useEffect(()=> {
        getGifs( category ).then( setImages );
    }, [ category]);*/

    /*const getGifs = async() =>{
        const url =`https://api.giphy.com/v1/stickers/search?api_key=H0ok826wF6Rg2wwNIGVTQLKfdQpyD6rJ&q=${ encodeURI( category ) }&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url : img.images?.downsized_medium.url,
            }
        } )
        setImages(gifs);
    }*/

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className='card animate__animated animate__flash'>Cargando...</p> }
            {<div className='card-grid'>
                <h3 >{ category }</h3>
                <ol>
         
                    {
                        images.map(img => <GifItem { ...img } key={ img.id }/>)
                    }
                </ol>
            </div> 
            }
        </>
    )
}
