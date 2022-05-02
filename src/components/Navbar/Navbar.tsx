import React from 'react'
import './Navbar.scss';

const Navbar = ({ text }: { text?: string }) => {
  
  return (
    <nav>{text ?? 'My todo app' }</nav>
  )
}

export default Navbar