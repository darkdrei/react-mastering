import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ( { title, id, url } ) => {
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

GifItem.defaultProps = {
    title:'Un titulo',
    url:'htps://localhost/algo.jpg'
}