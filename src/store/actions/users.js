import { ALL_USERS, UPDATE_USER } from './actionTypes'

export const addUser = (user_id) => {
    return {
        type: UPDATE_USER,
        user_id: user_id
    }
};

export const allUsers = () => {
    return {
        type: ALL_USERS
    }
};