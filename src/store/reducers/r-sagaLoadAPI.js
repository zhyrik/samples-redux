import { action } from "../actions"

const initialState = {
    error: false,
    loading: false,
    data: null
}

const sagaLoadAPI = (state = initialState, {type, payload}) => {
    switch(type) {
        case (action.SAGA_LOADING):
            return {...state, loading: payload}
        case (action.SAGA_ERROR):
            return {...state, error: payload}
        case (action.SAGA_DATA):
            return {...state, data: payload}
        default:
            return state
    }
}

export default sagaLoadAPI