import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types"


export const eventStartAddNew = (event) =>{
    return async( dispatch, getState) => {
        try{
            const { uid, name } = getState().auth;
        
            console.log(event);
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();
            if( body.ok ){
                event.id=body.evento.id;
                event.user = {
                    _id: uid,
                    name
                }
                console.log(event);
                dispatch( eventAddNew(event));
            }
        } catch(error){
            console.log(error);
        }
    }
}

export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({
    type: types.eventClearActiveEvent
});

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
})