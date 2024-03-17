import React, { Children, Component, forwardRef } from 'react'
import './MyButton.css'

const MyButton = forwardRef ((props, ref) => {
    // console.log(props)
  return (

    <button {...props} ref = {ref} className='button'>
       
    </button>

   )
  
})

export default MyButton
