import React, { useContext } from 'react'
import Cards from '../../Components/Cards/Cards'
import './All.css'
import { PassValue } from '../../App'

const All = () => {
  const AllProducts = useContext(PassValue)
  return (
    <div className='All'>
      {AllProducts.map((item)=>(
        <Cards {...item}/>
      ))}
    </div>
  )
}

export default All