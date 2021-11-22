import {all} from 'redux-saga/effects'

import { countWatcher } from './countSaga'
import { loadAPIWatcher } from './sagaLoadAPI'
import { loadDuckAPIWatcher} from '../ducksSaga'
// root saga
export function* rootWatcher () {
    yield all([countWatcher(), loadAPIWatcher(), loadDuckAPIWatcher()])
}