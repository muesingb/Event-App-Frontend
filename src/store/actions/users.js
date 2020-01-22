import { FETCH_USERS, UPDATE_USER, UPDATE_SHOW_USER, UPDATE_USER_INFO, UPDATE_SHOW_USER_INFO } from './actionTypes'
import { showEventInfo } from './events'

const URL = 'http://7bf28ea6.ngrok.io'

//sets current user to user_id given
export const currentUser = (user_id) => {
    return {
        type: UPDATE_USER,
        payload: user_id
    }
};

//sets show user to user_id given
export const showUser = (user_id) => {
    return {
        type: UPDATE_SHOW_USER,
        payload: user_id
    }
};

//fetches user's information from user_id given
export const currentUserInfo = (user_id) => {
    return (dispatch) => {
        fetch(`${URL}/users/${user_id}`)
              .then(response => response.json())
              .then(data => {
                dispatch({ 
                    type: UPDATE_USER_INFO,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
}

//fetches show user's information from user_id given
export const showUserInfo = (user_id) => {
    return (dispatch) => {
        fetch(`${URL}/users/${user_id}`)
              .then(response => response.json())
              .then(data => {
                dispatch({ 
                    type: UPDATE_SHOW_USER_INFO,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
}

//fetches all users
export const fetchUsers = () => {
    return (dispatch) => {
        fetch(`${URL}/users`)
              .then(response => response.json())
              .then(data => {
                dispatch({ 
                    type: FETCH_USERS,
                    payload: data
                })
              }).catch(function(err) {
                console.log( err);
              })
    }
};

// create new userEvent and current user will attend event
export const attendEvent = (body) => {
  return (dispatch) => {
      fetch(`${URL}/user_events`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
              'Accept': 'application/json',
              'content-type': 'application/json'
          }
          })
          .then(response => response.json())
          .then(data => {
            dispatch(currentUserInfo(data.attendee_id))
            dispatch(showEventInfo(data.event_id))
          })
  }
}

//deletes specified userEvent and current user will no longer attend
export const unattendEvent = (body) => {
  return (dispatch) => {
      fetch(`${URL}/user_events`, {
          method: 'DELETE',
          body: JSON.stringify(body),
          headers: {
              'Accept': 'application/json',
              'content-type': 'application/json'
          }
          })
          .then(response => response.json())
          .then(data => {
            dispatch(currentUserInfo(data.attendee_id))
            dispatch(showEventInfo(data.event_id))
          })
  }
}