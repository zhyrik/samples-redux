import { action } from "."

export const loading = payload => ({
    type: action.LOADING,
    payload
})
export const error = payload => ({
    type: action.ERROR,
    payload
})
export const getData= payload => ({
    type: action.DATA,
    payload
})

export const fetchData = () => dispatch => {
    dispatch(loading(true))

    fetch('https://restcountries.com/v3.1/name/peru')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch(getData(data))
        })
        .catch(err => dispatch(error(err.message)))
    setTimeout(() => {dispatch(loading(false))}, 3000)
}

export const fetchData2 = () => async dispatch => {
    dispatch(loading(true))

    try{
        const response = await fetch('https://restcountries.com/v3.1/name/peru')
        //const json = await response.json()
        dispatch(getData(response))

    } catch (er) {
        dispatch(error(er))
    }
    dispatch(loading(false))
}