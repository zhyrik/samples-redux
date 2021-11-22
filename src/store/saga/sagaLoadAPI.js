import {put, takeEvery} from 'redux-saga/effects'

import {action} from '../actions'
import {
    sagaData,
    sagaError,
    sagaLoading
} from '../actions/a-sagaLoadAPI.js'

function* loadAPIWorker () {
    yield put(sagaLoading(true))
    try {
        const data = yield fetch('https://restcountries.com/v3.1/name/peru')
        const json = yield data.json()
        yield put(sagaData(json))

    } catch (e) {
        yield put(sagaError(e.message))
    }
    yield put(sagaLoading(false))
}

export function* loadAPIWatcher () {
    yield takeEvery(action.SAGA_HANDLER, loadAPIWorker)
}