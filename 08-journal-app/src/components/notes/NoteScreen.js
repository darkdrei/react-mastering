import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Some aesone title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happendtoday"
                    className="notes__textarea"
                    
                >

                </textarea>
                <div className="notes__image">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCtXfDwEGmTdc2tWNmcUWxx88L2AfMH03CAepvX3E98hTfnNGRFPB30LrqqG722a8m-U&usqp=CAU"
                    />
                </div>
            </div>
        </div>
    )
}
