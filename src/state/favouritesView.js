import { database } from '../firebaseConfig'

const dbRef = database.ref('/events')
const SAVE_EVENT_LIST = 'favouritesView/SAVE_EVENT_LIST'
const SAVE_FAVS_LIST = 'favouritesView/SAVE_FAVS_LIST'

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

export const startListeningFavsAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/favourites`).on(
        'value',
        snapshot =>  dispatch(saveFavsListAction(snapshot.val())
    ))
}

export const stopListeningFavsAsyncAction = () => (dispatch, getState) => {
    const uuid = getState().auth.user.uid

    database.ref(`/users/${uuid}/favourites`).off()
}

export const toggleFavouriteAsyncAction = (event) => (dispatch, getState) => {
    const uuid = getState().auth.user.uid
    const isFav = getState().favouritesView.favs[event.key]

    database.ref(`/users/${uuid}/favourites`).child(event.key)
        .set(isFav ? null : true)
}


const saveEventListAction = (data) => ({
    type: SAVE_EVENT_LIST,
    data
}
)
const saveFavsListAction = (data) => ({
    type: SAVE_FAVS_LIST,
    data
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_EVENT_LIST:
            return {
                ...state,
                data: action.data
            }
        case SAVE_FAVS_LIST:
            return {
                ...state,
                favs: action.data
            }
        default:
            return state
    }
}