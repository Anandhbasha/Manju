import React from 'react'

const Carrd = ({prodName,prodPrice,prodDesc,btnValue,image}) => {
  return (
    <div className='Carrd'>
        <div className='topSection'>
            <img src={image}></img>
        </div>
        <div className='mainSection'>
            <h2>{prodName}</h2>
            <h2>RS:{prodPrice}</h2>
            <p>{prodDesc}</p>
            <button>{btnValue}</button>
        </div>
    </div>
  )
}

export default Carrd