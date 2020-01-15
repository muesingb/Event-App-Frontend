import { FETCH_USERS, UPDATE_USER, CREATED_EVENTS, ATTENDING_EVENTS, RENDERED_EVENTS, FETCH_EVENTS } from '../actions/actionTypes'

const initialState = {
    currentUser: 0,
    allUsers: [],
    createdEvents: [],
    attendingEvents: [],
    allEvents: [],
    eventView: "all"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                allUsers: action.payload
            };
            break
        case UPDATE_USER:
            return {
                ...state,
                currentUser: action.payload
            };
            break
        case CREATED_EVENTS:
            // return {
            //     ...state,
            //     currentUser: action.payload
            // };
            break
        case ATTENDING_EVENTS:
            // return {
            //     ...state,
            //     currentUser: action.payload
            // };
            break
        case RENDERED_EVENTS:
            // return {
            //     ...state,
            //     eventView: "user"
            // };
            break
        case FETCH_EVENTS:
            return {
                ...state,
               allEvents: action.payload
            };
            break
        default:
            return state;
    }
};

export default reducer