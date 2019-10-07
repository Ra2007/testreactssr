/* eslint-disable no-underscore-dangle */
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const persistConfig = {
  key: 'root',
  storage,
}

let state
if (typeof window !== 'undefined') {
  state = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__
}

const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer, state, composeEnhancers(applyMiddleware(...middleware)))
let persistor = persistStore(store)

export {store, persistor}
