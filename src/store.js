import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favouritesView from './state/favouritesView'
import eventListView from './state/eventListView'
import addEventFormView from './state/addEventFormView'
import notification from './state/notification'

import auth from './state/auth'

import loginsTimestamps from './state/loginsTimestamps'

const reducer = combineReducers({
    auth,
    favouritesView,
    eventListView,
    addEventFormView,
    notification,
    loginsTimestamps
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)