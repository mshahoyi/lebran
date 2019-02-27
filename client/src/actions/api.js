import axios from 'axios'

const LOGS_PATH = '/api/logs'

export function apiAddLog(log) {
  return axios.post(LOGS_PATH, log)
}

export function apiGetLogsAt(path) {
  return axios.get(LOGS_PATH + path)
}