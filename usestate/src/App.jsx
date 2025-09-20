import React, { useEffect, useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  const handleAdd= ()=>{
    setCount(++count)
    console.log(count);    
  }
  const handleMinus= ()=>{
    setCount(--count)
    console.log(count);    
  }

  useEffect(()=>{
    console.log("UseEffect is working");    
  },[count])
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Count Add</button>
      <button onClick={handleMinus}>Count Minus</button>
    </div>
  )
}
export default App