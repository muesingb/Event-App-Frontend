import { UPDATE_TAB, FETCH_USERS, UPDATE_USER, UPDATE_SHOW_USER, UPDATE_USER_INFO, UPDATE_SHOW_USER_INFO, UPDATE_SHOW_EVENT_INFO, RENDERED_EVENTS, FETCH_EVENTS, CREATE_EVENT, UPDATE_EVENT_TIME } from '../actions/actionTypes'


const initialState = {
    currentUser: null,
    currentUserAttending: false,
    showUser: null,
    allUsers: [],
    currentUserInfo: [],
    showUserInfo: [],
    showEventInfo: [],
    showEventId: null,
    allEvents: [],
    allEventsView: true,
    selectedEventTime: 0,
    tab: ""
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
        case UPDATE_SHOW_EVENT_INFO:
            return {
                ...state,
                showEventInfo: action.payload,
                showEventId: action.payload.event.id
            };
            break
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
            return {
                ...state,
                allEvents: [...state.allEvents, action.payload],
                currentUserInfo: {...state.currentUserInfo, 
                    created_events: [...state.currentUserInfo.created_events, action.payload],
                    events: [...state.currentUserInfo.events, action.payload]
                }
            };
            break
        case UPDATE_EVENT_TIME:
        return {
            ...state,
            selectedEventTime: action.payload
        };
        break
        case UPDATE_TAB:
        return {
            ...state,
            tab: action.payload
        };
        break
        default:
            return state;
    }
};

export default reducer