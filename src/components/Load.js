import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchData2 } from '../store/actions/a-load'

export default function Load() {
    const dispatch = useDispatch()
    const {loading, error, data} = useSelector(state => state.load)
    console.log(loading, error, data)
    return (
        <div>
            load
            <button onClick={() => dispatch(fetchData())}>get data</button>
            <button onClick={() => dispatch(fetchData2())}> get 2</button>
        </div>
    )
}
