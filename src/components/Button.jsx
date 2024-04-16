import React from 'react'
import '../App.scss'

const Button = ({text, type, className, onClick}) => {
  return (
   
    <button onClick={onClick} type={type} className={className} >{text}</button>
  
  )
}

export default Button
