import Button from "./Button"

function App(){

  const btnValue = ["Click","Login","Save","Edit","Delete"]
  return (
    <div className="App" style={{background:"red"}}>
      {btnValue.map((item)=>(
        <Button value={item}/>
      ))}
    </div>
  )
}
export default App