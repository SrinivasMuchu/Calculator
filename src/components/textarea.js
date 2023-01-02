import React from 'react'
import './textarea.css'

 const Textarea =({text,result})=> {
  return (
    <div className='input-taken'>
    <div className='answer'>
        <h1>{result}</h1>
    </div>
    <div className='text'>
        <h3>{text}</h3>
    </div>
    </div>
  )
}
export default Textarea