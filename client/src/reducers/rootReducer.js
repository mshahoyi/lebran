import { ActionTypes } from "../actions/actions";

export default function(state = defaultState, action) {
    switch(action.type) {
        case ActionTypes.CHECKIN:
            return state;

        case ActionTypes.GET_ATTENDANTS:
            let attendantobj = {};
            action.attendants.forEach(attendant => attendantobj[attendant._id] = attendant);
            return { ...state, sessions: {...state.sessions, [action.sessionName]: attendantobj }}

        default: return state
    }
}

export const defaultState = {
    logs: []
}