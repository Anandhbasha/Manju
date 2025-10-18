import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/Slice'

const Counts = () => {
  const counts = useSelector((state)=>state.newCount.count)
  const dispatch = useDispatch()
  return (
    <div className='count'>
      <h1>{counts}</h1>
      <button onClick={()=>dispatch(increment(1))}>Add</button>
      <button onClick={()=>dispatch(decrement(1))}>Minus</button>
    </div>
  )
}

export default Counts