

const FILTER_TEXT_CHANGE = 'eventListView/FILTER_TEXT_CHANGE'
const USERS_NUMBER_CHANGE = 'eventListView/USERS_NUMBER_CHANGE'
const EVENTS_FILTER_CATEGORY_CHANGE = 'eventListView/EVENTS_FILTER_CATEGORY_CHANGE'

const INITIAL_STATE = {
    numberOfUsers: 150,
    filterText: '',
    filterCategory: '',
}

export const filterTextChangeAction = (text) =>({
    type: FILTER_TEXT_CHANGE,
    text
})

export const usersNumberChangeAction = (number) => ({
    type: USERS_NUMBER_CHANGE,
    number
})

export const eventsFilterCategoryChangeAction = (text) => ({
    type: EVENTS_FILTER_CATEGORY_CHANGE,
    text
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FILTER_TEXT_CHANGE:
        return {
            ...state,
            filterText: action.text
        }
        case USERS_NUMBER_CHANGE:
        return {
            ...state,
            numberOfUsers: action.number
        }
        case EVENTS_FILTER_CATEGORY_CHANGE:
        return {
            ...state,
            filterCategory: action.text
        }
        default:
            return state
    }
}