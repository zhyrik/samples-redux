import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDataDuck } from '../store/ducksSaga'

export default function DuckSaga() {
    const dispatch = useDispatch()
    const { error, loading, data} = useSelector(state => state.duckSagaReducer)
    console.log(error, loading, data, 'duck')

    return (
        <div>
            <hr />
            duck saga
            <button onClick={() => dispatch(fetchDataDuck())}>duck API</button>
        </div>
    )
}
