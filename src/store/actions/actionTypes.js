//fetch all users
export const FETCH_USERS = 'FETCH_USERS'

//update current user id
export const UPDATE_USER = 'UPDATE_USER'

//update show user for profile or selecting another user
export const UPDATE_SHOW_USER = 'UPDATE_SHOW_USER'

//update current user information including the events they created and are attending
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

//update show user information
export const UPDATE_SHOW_USER_INFO = 'UPDATE_SHOW_USER_INFO'

//update show event
export const UPDATE_SHOW_EVENT_INFO = 'UPDATE_SHOW_EVENT_INFO'

//create new userEvent and current user will attend event
export const ATTEND_EVENT = 'ATTEND_EVENT'

//should events render user's events (false) or all events (true). Default is true
export const RENDERED_EVENTS = 'RENDERED_EVENTS'

//fetch all events
export const FETCH_EVENTS = 'FETCH_EVENTS'

//create a new event
export const CREATE_EVENT = 'CREATE_EVENT'