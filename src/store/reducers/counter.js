import { action } from '../actions'

const initialState = {
    counter: 0
}

const counter = (state = initialState, {type, payload}) => {
    switch (type) {
        case action.ADD:
            return {...state, counter: state.counter + 1}
        case action.SUB:
            return {...state, counter: state.counter - payload}
        default:
            return state
    }
}

export default counter