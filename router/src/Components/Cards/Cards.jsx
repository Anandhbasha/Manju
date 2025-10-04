import React from 'react'
import './Cards.css'
import image1 from '../../assets/Images/Img.jpeg'

const Cards = ({prodName,prodPrice,prodDesc,image}) => {
  return (
    <div className='Cards'>
      <div className='cardTop'>
        <img src={image}></img>
      </div>
      <div className='bottomSection'>
        <h3>{prodName}</h3>
        <h3>{prodPrice}</h3>
        <h3>{prodDesc}</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Cards