import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import auth from './state/auth'
import favouritesView from './state/favouritesView'
import eventListView from './state/eventListView'

const reducer = combineReducers({
    auth,
    favouritesView,
    eventListView
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)