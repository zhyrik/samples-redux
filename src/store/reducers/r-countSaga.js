import {action} from '../actions'

const initialState = {
    counter: 11
}

const countSaga = (state = initialState, {type, payload}) => {
    switch(type){
        case (action.SAGACOUNTINCREMENT):
            return {...state, counter: state.counter + 1}
        default: 
            return state
    }
}

export default countSaga