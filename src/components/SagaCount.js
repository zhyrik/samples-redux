import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {asynckincrementCreator} from '../store/actions/a-countSaga'

export default function Saga() {
    const { counter } = useSelector(state => state.countSaga)
    const dispatch = useDispatch()
    return (
        <div>
            Saga {counter}
            <button onClick={() => dispatch(asynckincrementCreator())}>add with saga</button>
        </div>
    )
}
