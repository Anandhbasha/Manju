import React, { createContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import './App.css'
import shirt1 from './assets/Images/casualShirt.jpeg'
import Shirt2 from './assets/Images/shirt1.jpeg'
import Shirt3 from './assets/Images/ShirtCombo.jpeg'
import shirt4 from './assets/Images/formalWomens.jpeg'
import shirt5 from './assets/Images/printedWomens.jpeg'
import shirt6 from './assets/Images/casulWears.jpeg'
export const PassValue = createContext()
const App = () => {
  const AllProducts = [
    {
      prodCat:"Mens",
      prodName:"Casual Shirt",
      prodPrice:"RS:500",
      prodDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi molestiae at alias aperiam sed blanditiis hic rerum reiciendis in. Voluptates ratione cupiditate, obcaecati at nam nesciunt ex deserunt iste!",
      image:shirt1
    },
    {
      prodCat:"Mens",
      prodName:"Formal Shirt",
      prodPrice:"RS:300",
      prodDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi molestiae at alias aperiam sed blanditiis hic rerum reiciendis in. Voluptates ratione cupiditate, obcaecati at nam nesciunt ex deserunt iste!",
      image:Shirt2
    },
    {
      prodCat:"Mens",
      prodName:"Comba Shirt",
      prodPrice:"RS:1100",
      prodDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi molestiae at alias aperiam sed blanditiis hic rerum reiciendis in. Voluptates ratione cupiditate, obcaecati at nam nesciunt ex deserunt iste!",
      image:Shirt3
    },
    {
      prodCat:"Womens",
      prodName:"Formal Womens Shirt",
      prodPrice:"RS:400",
      prodDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi molestiae at alias aperiam sed blanditiis hic rerum reiciendis in. Voluptates ratione cupiditate, obcaecati at nam nesciunt ex deserunt iste!",
      image:shirt4
    },
    {
      prodCat:"Womens",
      prodName:"Printed Women Shirt",
      prodPrice:"RS:700",
      prodDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi molestiae at alias aperiam sed blanditiis hic rerum reiciendis in. Voluptates ratione cupiditate, obcaecati at nam nesciunt ex deserunt iste!",
      image:shirt5
    },
    {
      prodCat:"Womens",
      prodName:"Casual Womens Shirt",
      prodPrice:"RS:600",
      prodDesc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nisi molestiae at alias aperiam sed blanditiis hic rerum reiciendis in. Voluptates ratione cupiditate, obcaecati at nam nesciunt ex deserunt iste!",
      image:shirt6
    }
  ]
  return (
    <BrowserRouter>
      <PassValue.Provider value={AllProducts}>
        <div className='App'>
        <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>} />
        </Routes>
      </PassValue.Provider>
    </BrowserRouter>
  )
}

export default App