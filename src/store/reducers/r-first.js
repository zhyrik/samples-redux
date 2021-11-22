import { action } from "../actions";

const initialState = {
    first: 0
}

const first = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.ADD2: 
            return {...state, first: state.first + payload}
        case action.SUB2:
            return {...state, first: state.first - payload}
        default:
             return state
    }
}

export default first