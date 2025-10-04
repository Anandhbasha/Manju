import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import { PassValue } from '../../App'
import './Mens.css'

const Mens = () => {
  const AllProducts = useContext(PassValue)
  // console.log(AllProducts);
  const mensProd = AllProducts.filter((item)=>item.prodCat==="Mens")
  console.log(mensProd);
  
  
  return (
    <div className='Mens'>
      {mensProd.map((item)=>(
        <Cards {...item}/>
      ))}
    </div>
  )
}

export default Mens