import { FETCH_USERS, UPDATE_USER, UPDATE_SHOW_USER, UPDATE_USER_INFO, UPDATE_SHOW_USER_INFO, ATTEND_EVENT } from './actionTypes'

const URL = 'http://90c39a46.ngrok.io'

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

//create new userEvent and current user will attend event
// export const attendEvent = (event_id) => {
//   return (dispatch) => {
//       fetch('http://localhost:3000/events', {
//           method: 'POST',
//           body: JSON.stringify({name: "whadddddupppp", password: "poop"}),
//           headers: {
//               'Accept': 'application/json',
//               'content-type': 'application/json'
//           }
//           })
//           .then(response => response.json())
//           .then(data => {
//               console.log(data)
//           })
//   }
// }