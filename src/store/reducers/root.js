import { ALL_USERS, UPDATE_USER, CREATED_EVENTS, ATTENDING_EVENTS, RENDERED_EVENTS } from '../actions/actionTypes'

const initialState = {
    currentUser: 0,
    allUsers: [],
    createdEvents: [],
    attendingEvents: [],
    eventView: "all"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_USERS:
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
};

export default reducer