import { apiAddLog, apiGetLogsAt } from './api'

export const ActionTypes = {
  CHECKIN: 'CHECKIN',
  GET_ALL_LOGS: 'GET_LOGS',
}

// State mutating actions
export const getLogsAt = (path) => dispatch => {
  apiGetLogsAt(path)
    .then(logs => {
      dispatch({ type: ActionTypes.GET_ALL_LOGS, payload: logs})
    })
    .catch(e => console.log('could not retrieve sessions from server due to error: ' + e));
}

export const addLog = (log) => dispatch => {
  apiAddLog(log)
    .then(log => {
      dispatch({
        type: ActionTypes.CHECKIN,
        payload: log
      });
    })
    .catch(e => 'could not add attendant due to error: ' + e);
}

// Non state-mutating actions