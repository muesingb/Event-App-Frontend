import { ALL_USERS, UPDATE_USER, CREATED_EVENTS, ATTENDING_EVENTS, RENDERED_EVENTS } from '../actions/actionTypes'

const initialState = {
    currentUser: null,
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
                currentUser: action.user_id
            };
        default:
            return state;
    }
};

export default reducer;