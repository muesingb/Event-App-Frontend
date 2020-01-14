import { CREATED_EVENTS, ATTENDING_EVENTS, RENDERED_EVENTS } from './actionTypes'

export const createdEvents = () => {
    return {
        type: CREATED_EVENTS
    }
};

export const attendingEvents = () => {
    return {
        type: ATTENDING_EVENTS
    }
};

export const renderedEvents = () => {
    return {
        type: RENDERED_EVENTS
    }
};