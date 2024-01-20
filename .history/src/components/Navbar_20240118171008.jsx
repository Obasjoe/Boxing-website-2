import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='box_logo'>
        LOGO
      </Link>
    </nav>
  )
}

export default Navbar
