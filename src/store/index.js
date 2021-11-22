import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/rootReducer'
import { rootWatcher } from './saga'

// run redux-saga
const sagaMiddleware = createSagaMiddleware()
// conect redux-thunk , redux-saga
export const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware))

// conect root saga !!!!!
sagaMiddleware.run(rootWatcher)