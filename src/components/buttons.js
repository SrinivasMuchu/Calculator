import React from 'react'
import './buttons.css'

const Buttons =({symbols,handleClick,color}) => {
  return (
    <div className='btn' style={{backgroundColor:color}}
     onClick={()=>handleClick(symbols)}>
      
      {symbols}
    </div>
  )
}

export default Buttons
