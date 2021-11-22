import { combineReducers } from 'redux'

import counter from './counter'
import first from './r-first'
import load from './r-load'
import countSaga from './r-countSaga'
import sagaLoadAPI from './r-sagaLoadAPI'
import {duckSagaReducer} from '../ducksSaga'

export default combineReducers({
    counter,
    first,
    load,
    countSaga,
    sagaLoadAPI,
    duckSagaReducer
})