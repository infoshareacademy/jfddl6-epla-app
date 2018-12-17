import { database } from '../firebaseConfig'

const INITIAL_STATE = {
    loginsData: []
}

const ADD_LOGINS_TIMESTAMP_TO_STATE = 'loginsTimestamps/ADD_LOGINS_TIMESTAMP_TO_STATE'

export const startSyncLoginsTimestampAsyncAction = () => (dispatch, getState) => {
    database.ref('users/loginLogs').on(
        'value',
        snapshot => {
            const loginLogs = Object.entries(
                snapshot.val()
            ).map(entry => ({
                ...entry[1],
                key: entry[0]
            }))
            dispatch(addLoginsTimestampToState(loginLogs))
        }
    )
}

export const stopSyncLoginsTimestampAsyncAction = () => (dispatch, getState) => {
    database.ref('users/loginLogs').off()
}

const addLoginsTimestampToState = (loginLogs) => ({
    type: ADD_LOGINS_TIMESTAMP_TO_STATE,
    loginLogs
})


export default (state = INITIAL_STATE, action) => {
    if (action.type === ADD_LOGINS_TIMESTAMP_TO_STATE) {
        return {
            ...state,
            loginsData: action.loginLogs
        }
    }
    return state
}
