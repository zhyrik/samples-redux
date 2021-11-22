import { action } from ".";

export const addF = payload => ({
    type: action.ADD2,
    payload
})

export const subF = payload => ({
    type: action.SUB2,
    payload
})

export const assyncAdd = (payload) => dispatch => {
    setTimeout(() => {
        dispatch(subF(payload))
    }, 2000)
}