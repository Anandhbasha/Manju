import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const[datas,setDatas] = useState([])
  useEffect(()=>{
    const fetchdata = async()=>{
      try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        if(!res){
          throw Error("Unable to connect API")
        }
        let details = await res.data
        setDatas(details)        
      } catch (error) {
        console.log(error);        
      }
    }
    fetchdata()
    
    
  },[])
  console.log(datas);
  return (
    <div className='App'>

    </div>
  )
}

export default App