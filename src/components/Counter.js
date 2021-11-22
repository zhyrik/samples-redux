import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'

import { add, sub } from '../store/actions/counter'

function Counter () {
    const dispatch = useDispatch()
    const { counter } = useSelector((state) => state.counter )
    console.log(counter)

    return (
        <div>
            <h1>counter: {counter}</h1>
            <hr/>
            <button onClick={() => dispatch(add())}>add1</button>
            <button onClick={() => dispatch(sub(5))}>sub</button>

            <button>addAfter</button>
        </div>
    )
}

export default Counter