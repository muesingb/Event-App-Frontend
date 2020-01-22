import { UPDATE_TAB } from '../actions/actionTypes'

export const updateTab = (tabName) => {
    return {
        type: UPDATE_TAB,
        payload: tabName
    }
};