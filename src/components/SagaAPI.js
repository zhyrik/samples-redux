import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sagaHandler } from '../store/actions/a-sagaLoadAPI'

export default function SagaAPI() {
    const dispatch = useDispatch()
    const { error, loading, data } = useSelector(state => state.sagaLoadAPI)
    console.log('saga', error, loading, data)
    return (
        <div>
            <hr />
            api
            <button onClick={() => dispatch(sagaHandler())}>load saga api</button>
        </div>
    )
}
