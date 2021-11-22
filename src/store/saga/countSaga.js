import { put, takeEvery } from "redux-saga/effects"
import {action} from '../actions'
import { incrementCreator } from "../actions/a-countSaga"
// dellay functiion for imitation dalay
const delay = ms => new Promise(res => setTimeout(res, ms))
// worker
function* incrementWorker() {
    yield delay(1000)
    // put - analog dispatch
    // incrementCreator - { type: action.SAGACOUNTINCREMENT }
    yield put(incrementCreator()) 
}
// watcher
export function* countWatcher() {
    yield takeEvery(action.SAGACOUNTINCREMENTASYNC, incrementWorker)
}