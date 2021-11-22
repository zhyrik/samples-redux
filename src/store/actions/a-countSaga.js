import {action} from '.'
// normal action for reducer
export const incrementCreator = () => ({
    type: action.SAGACOUNTINCREMENT
})
// async actioin obj
export const asynckincrementCreator = () => ({
    type: action.SAGACOUNTINCREMENTASYNC
})