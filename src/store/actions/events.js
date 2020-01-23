import {  UPDATE_SHOW_EVENT_INFO, RENDERED_EVENTS, FETCH_EVENTS, CREATE_EVENT, UPDATE_EVENT_TIME } from './actionTypes'

const URL = 'http://81c4fec3.ngrok.io'

//fetches show event's information from event_id given
export const showEventInfo = (event_id) => {
    return (dispatch) => {
        fetch(`${URL}/events/${event_id}`)
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                dispatch({ 
                    type: UPDATE_SHOW_EVENT_INFO,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
}

//toggle rendered events view between all (true) and user's events (false)
export const toggleRenderedEvents = (view) => {
    return {
        type: RENDERED_EVENTS,
        payload: view
    }
};

//fetch all events
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

//create event
export const createEvent = (eventInfo) => {
    return (dispatch) => {
        fetch(`${URL}/events`, {
            method: 'POST',
            body: JSON.stringify(eventInfo),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
            })
            .then(response => response.json())
            .then(data => {
                dispatch(showEventInfo(data.id))
                dispatch({ 
                    type: CREATE_EVENT,
                    payload: data
                })
            }).catch(function(err) {
                console.log( err);
              })
    }
}

//Updates event time for newly created events
export const updateEventTime = (time = Date.now()) => {
    return {
        type: UPDATE_EVENT_TIME,
        payload: time
    }
}