import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>LOGO</div>
            <div className="nav-elements">
        <ul>
          <li>
           <NavLink to = "/">Home</NavLink>
          </li>
          <li>
            <NavLink to = "/About">About</NavLink>
          </li>
          <li>
            <NavLink to = "/Programs">Programs</NavLink>
          </li>
          <li>
            <NavLink to = "/Contact Us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
 </nav>
  )
}

export default Navbar
