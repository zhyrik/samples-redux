import {action} from '.'

export const sagaLoading = payload => ({
    type: action.SAGA_LOADING,
    payload
})

export const sagaError = payload => ({
    type: action.SAGA_ERROR,
    payload
})

export const sagaData = payload => ({
    type: action.SAGA_DATA,
    payload
})

export const sagaHandler = () => ({type: action.SAGA_HANDLER})