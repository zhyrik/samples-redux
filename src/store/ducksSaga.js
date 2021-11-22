import {put, takeEvery, call} from 'redux-saga/effects'

// actions variables
const action = {
    ERROR_DUCK: 'ERROR_DUCK',
    LOADING_DUCK: 'LOADING_DUCK',
    SET_DATA_DUCK: 'SET_DATA_DUCK',
    FETCH_DUCK: 'FETCH_DUCK'
}
// actions objects
const errorDuck = p => ({type: action.ERROR_DUCK, p}) // p ->> payload IMPORTANT !!!!!
const loadingDuck = p => ({type: action.LOADING_DUCK, p})
const setDataDuck = p => ({type: action.SET_DATA_DUCK, p})
//export to DuckSaga component
export const fetchDataDuck = () => ({type: action.FETCH_DUCK})
// init state
const initialState = {
    error: false,
    loading: false,
    data: null
}
// reducer
// export to root reducer
export const duckSagaReducer = (state = initialState, {type, p}) => {
    switch (type) {
        case (action.LOADING_DUCK):
            return {...state, loading: p}
        case (action.ERROR_DUCK):
            return {...state, error: p}
        case (action.SET_DATA_DUCK):
            return {...state, data: p}
        default:
            return state
    }
}
// async fetch function (worker with call)
async function fetchData () {
    const data = await fetch('https://restcountries.com/v3.1/name/peru')
    const json = await data.json()
    return json
}
// saga worker
function* loadDuckAPIWorker () {
    yield put(loadingDuck(true))
    try {
        // 2 wariant
        // const data = yield fetch('https://restcountries.com/v3.1/name/peru')
        // const json = yield data.json()
        const json = yield call(fetchData)
        yield put(setDataDuck(json))

    } catch (e) {
        yield put(errorDuck(e.message))
    }
    yield put(loadingDuck(false))
}
//saga watcher
// export to root saga
export function* loadDuckAPIWatcher () {
    yield takeEvery(action.FETCH_DUCK, loadDuckAPIWorker)
}
