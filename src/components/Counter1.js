import React from 'react'
import actionCreators from "../store/actionCreators/counter1";
import { useSelector, useBoundDispatch } from  '../react-redux'

function Counter1() {
  let state = useSelector((state) => state.counter1)
  let dispatch = useBoundDispatch(actionCreators);
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={dispatch.add}>+</button>
      <button onClick={dispatch.minus}>-</button>
    </div>
  )
}

export default Counter1
