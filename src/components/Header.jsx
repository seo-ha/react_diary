import React from 'react'
import Button from './Button'
import '../App.scss';

const Header = ({title ,leftChild, rightChild }) => {
  return (
    <header>
        <div>{leftChild}</div>
        
        <h1>{title}</h1>
        
        <div>{rightChild}</div>
    </header>
  )
}

export default Header
