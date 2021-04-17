import React, { memo } from 'react'

// Forma 1
/*export const Small = memo(({ value }) => {
    console.log('Me llamaron :(');
    return (
        <div>
            <small>{ value }</small>
        </div>
    )
})*/

//Forma 2
export const Small = React.memo(({ value }) => {
    console.log('Me llamaron :(');
    return (
        <div>
            <small>{ value }</small>
        </div>
    )
})

