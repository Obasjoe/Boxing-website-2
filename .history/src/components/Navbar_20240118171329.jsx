import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='box_logo'>
        LOGO
      </Link>

      {/*For mobile and smaller screens */}
      <div className='menu'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
