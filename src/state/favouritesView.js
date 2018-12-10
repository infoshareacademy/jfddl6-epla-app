import { database } from '../firebaseConfig'

const dbRef = database.ref('/events')
const SAVE_EVENT_LIST = 'favouritesView/SAVE_EVENT_LIST'

const INITIAL_STATE = {
    data: []
}

export const getEventListFromDbAsyncAction = () => (dispatch, getState) => {
    dbRef.on(
        'value',
        snapshot => {
            const events = Object.entries(
                snapshot.val()
            ).map(entry => ({
                ...entry[1],
                key: entry[0]
            }))

            dispatch(saveEventListAction(events))

        }
    )
}

export const stopListeningToDbAsyncAction = () => (dispatch, getState) => {
    dbRef.off()
}

export const deleteEventAsyncAction = (eventKey) => (dispatch, getState) => {
    dbRef.child(eventKey)
        .update({
            isFavourite: false
        })
}

const saveEventListAction = (data) => ({
    type: SAVE_EVENT_LIST,
    data
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_EVENT_LIST:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}