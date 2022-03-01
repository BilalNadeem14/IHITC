import initialStates from "./initialStates";
import types from '../actions/actionTypes'

const INITIAL_STATE = initialStates.offlineReducer;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_PENDING_REQUEST:
            return {
                pendingRequests: [...state.pendingRequests, action.payload]
            }
        case types.UPDATE_PENDING_REQUEST:
            const cloneArray = [...state.pendingRequests];
            cloneArray[action.payload.index].status = 'completed';
            return {
                pendingRequests: cloneArray
            }
        default:
            return state;
    }
}