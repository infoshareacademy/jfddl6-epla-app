import { database } from '../firebaseConfig'
import { toggleNotificationAction } from './notification'

const dbRef = database.ref('/events')

const DATE_CHANGE = 'addEventFormView/DATE_CHANGE'
const CITY_CHANGE = 'addEventFormView/CITY_CHANGE'
const STREET_CHANGE = 'addEventFormView/STREET_CHANGE'
const RESTORE_INITIAL_STATE = 'addEventFormView/RESTORE_INITIAL_STATE'
const CATEGORY_SELECT = 'addEventFormView/CATEGORY_SELECT'
const EVENT_NAME_CHANGE = 'addEventFormView/EVENT_NAME_CHANGE'

const INITIAL_STATE = {
    eventName: '',
    category: '',
    date: '',
    city: '',
    street: '',
    isFavourite: false,
    photo: ''
}

export const addToFirebaseAsyncAction = () => (dispatch, getState) => {
    const state = getState().addEventFormView
    dbRef.push({
        ...state,
        date: ourDateFormatter(getState().addEventFormView.date),
        participants: getRandomParticipantsNumber(),
    })

    dispatch(restoreInitialStateAction())
}

export const handleAddEventClick = () => (dispatch, getState) => {
    const state = getState().addEventFormView
    if (state.eventName !== '' && state.category !== '' && state.date !== '') {
        dispatch(toggleNotificationAction('Event added'))
        dispatch(addToFirebaseAsyncAction())
    }
    else {
        dispatch(toggleNotificationAction('Enter event name, category and date.'))
    }
}

export const dateChangeAction = (event, date) => ({
    type: DATE_CHANGE,
    date
})

export const eventNameChangeAction = (event, text) => ({
    type: EVENT_NAME_CHANGE,
    text
})

export const streetChangeAction = (event, text) => ({
    type: STREET_CHANGE,
    text
})

export const cityChangeAction = (event, text) => ({
    type: CITY_CHANGE,
    text
})

export const categorySelectChange = (event, index, text) => ({
    type: CATEGORY_SELECT,
    text
})

const restoreInitialStateAction = () => ({
    type: RESTORE_INITIAL_STATE,
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESTORE_INITIAL_STATE:
            return {
                eventName: '',
                category: '',
                date: '',
                city: '',
                street: '',
                photo: ''
            }
        case EVENT_NAME_CHANGE:
            return {
                ...state,
                eventName: action.text
            }
        case DATE_CHANGE:
            return {
                ...state,
                date: action.date
            }
        case CITY_CHANGE:
            return {
                ...state,
                city: action.text
            }
        case STREET_CHANGE:
            return {
                ...state,
                street: action.text
            }
        case CATEGORY_SELECT:
            return {
                ...state,
                category: action.text,
                photo: mapImageSourceToCategory[action.text]
            }
        default:
            return state
    }
}

const getRandomParticipantsNumber = () =>
    Math.round(Math.random() * 100) + 50

const ourDateFormatter = (date) => {
    return date.getDate() + ' -' + (date.getMonth() + 1) + ' -' + date.getFullYear()
}

const mapImageSourceToCategory = {
    music: "https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    sport: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    cultural: "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    religious: "https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
}