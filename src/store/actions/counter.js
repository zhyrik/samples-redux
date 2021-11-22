import { action } from '.'

export const add = () => ({
    type: action.ADD
})

export const sub = (payload) => ({
    type: action.SUB,
    payload
})