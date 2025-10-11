// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)
//   let [bg,setBg] = useState("dark")
//   const handleCount= ()=>{
//     setCount((prev)=>++prev)
//     // console.log(prev);
    
//   }
//   const handleBg= ()=>{
//     setBg(bg==="dark"?"light":"dark")
//   }
//   return (
//     <div className="App">
//       <button onClick={handleCount}>Add Count{count}</button>
//       <button onClick={handleBg}>{bg}</button>
//     </div>
//   )
// }

// export default App



import React, { useReducer } from 'react'

const App = () => {
  const reducer = (state,action)=>{
    switch(action.type){
      case "add":
        return {...state,count:state.count+1}
      case "red":
        return{...state,bg:state.bg==="dark"?"red":"dark"}
      case "blue":
        return{...state,bg:state.bg==="dark"?"blue":"dark"}
      case "purple":
        return{...state,bg:state.bg==="dark"?"purple":"dark"}
    }
  } 
  
  const [state,dispatch] = useReducer(reducer,{count:0,bg:"dark"})
  return (
    <div className='App' style={{marginLeft:"200px",backgroundColor:state.bg==="dark"?"black":state.bg,height:"600px",padding:"20px 50px"}}>
      <button onClick={()=>dispatch({type:"add"})}>{state.count}</button>
      <button onClick={()=>dispatch({type:"red"})}>{state.bg}</button>
      <button onClick={()=>dispatch({type:"blue"})}>{state.bg}</button>
      <button onClick={()=>dispatch({type:"purple"})}>{state.bg}</button>
    </div>
  )
}

export default App








// spread operator
//  let arr1 = [10,20,40,50]
//   let arr2 = [66,5454,54454]
//   let arr3 = [...arr1,...arr2]
//   console.log(arr3);