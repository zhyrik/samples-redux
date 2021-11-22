import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {addF, assyncAdd} from '../store/actions/a-first'

export default function First() {
    const {first} = useSelector(state => state.first)
    const dispatch = useDispatch()
    const [num, setNum] = useState()
    return (
        <div>
            first {first}
            <hr/>
            <button onClick={() => dispatch(addF(5))}> add one</button>
            <button onClick={() => dispatch(addF(+num))}> add input</button>
            <input onChange={e => setNum(e.target.value)}/>
            <button onClick={() => dispatch(assyncAdd(67))}> assync sub 67</button>
        </div>
    )
}
