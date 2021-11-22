import { action } from "../actions"

const initialState = {
    error: null,
    loading: false,
    data: null
}

const load = (state = initialState, {type, payload}) => {
    switch(type){
        case action.LOADING:
            return {...state, loading : payload}
        case action.ERROR:
            return {...state, error: payload}
        case action.DATA:
            return {...state, data: payload}
        default:
            return {...state}
    }
}

export default load