import { types } from '../types/types'


export const setError = (error) =>{
    return {
        type: types.uiSetError,
        payload:error
    }
}

export const removeError = () =>({
    type: types.uiRemoveError,
})

export const startLoading = () =>({
    type: types.uiStartLoading,
})

export const finishLoading = () =>({
    type: types.uiFinishLoading,
})