import {  RENDERED_EVENTS, FETCH_EVENTS, CREATE_EVENT } from './actionTypes'

const URL = 'http://31a2db4e.ngrok.io'

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
// export const createEvent = () => {
//     return (dispatch) => {
//         fetch('http://localhost:3000/events', {
//             method: 'POST',
//             body: JSON.stringify({name: "whadddddupppp", password: "poop"}),
//             headers: {
//                 'Accept': 'application/json',
//                 'content-type': 'application/json'
//             }
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//             })
//     }
// }