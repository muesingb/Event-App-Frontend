import { FETCH_USERS, UPDATE_USER } from './actionTypes'

const URL = 'http://b43ae261.ngrok.io'

export const currentUser = (user_id) => {
    return {
        type: UPDATE_USER,
        payload: user_id
    }
};

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