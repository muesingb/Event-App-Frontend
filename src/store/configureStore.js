import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers/root';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    eventsAndUsers: reducer
})

const configureStore = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default configureStore;