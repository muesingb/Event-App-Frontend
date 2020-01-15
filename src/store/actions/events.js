import { CREATED_EVENTS, ATTENDING_EVENTS, RENDERED_EVENTS, FETCH_EVENTS } from './actionTypes'

const URL = 'http://b43ae261.ngrok.io'

export const createdEvents = (user_id) => {
    return {
        type: CREATED_EVENTS
    }
};

export const attendingEvents = (user_id) => {
    return {
        type: ATTENDING_EVENTS
    }
};

export const renderedEvents = () => {
    return {
        type: RENDERED_EVENTS
    }
};

export const fetchEvents = () => {
    return (dispatch) => {
        fetch(`${URL}/events`)
              .then(response => response.json())
              .then(data => {
                dispatch({ 
                    type: FETCH_EVENTS,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
}