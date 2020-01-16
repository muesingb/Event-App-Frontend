import { FETCH_USERS, UPDATE_USER, UPDATE_SHOW_USER, UPDATE_USER_INFO, UPDATE_SHOW_USER_INFO, ATTEND_EVENT, RENDERED_EVENTS, FETCH_EVENTS, CREATE_EVENT } from '../actions/actionTypes'

const initialState = {
    currentUser: null,
    showUser: null,
    allUsers: [],
    currentUserInfo: [],
    showUserInfo: [],
    allEvents: [],
    allEventsView: true
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
        case UPDATE_SHOW_USER:
        return {
            ...state,
            showUser: action.payload
        };
        break
        case UPDATE_USER_INFO:
            return {
                ...state,
                currentUserInfo: action.payload
            };
            break
        case UPDATE_SHOW_USER_INFO:
            return {
                ...state,
                showUserInfo: action.payload
            };
            break
        case ATTEND_EVENT:
            // return {
            //     ...state,
            //     currentUserInfo: action.payload
            // };
            // break
        case RENDERED_EVENTS:
            return {
                ...state,
                allEventsView: action.payload
            };
            break
        case FETCH_EVENTS:
            return {
                ...state,
               allEvents: action.payload
            };
            break
        case CREATE_EVENT:
            // return {
            //     ...state,
            //     allEvents: action.payload
            // };
            break
        default:
            return state;
    }
};

export default reducer