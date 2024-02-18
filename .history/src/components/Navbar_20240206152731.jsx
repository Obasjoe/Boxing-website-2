import { Link, NavLink } from 'react-router-dom'
import "../Css/Navbar.css"
import { useState } from 'react'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/" className='box_logo'>
        LOGO
      </Link>

      {/*For mobile and smaller screens */}
      <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* Nav Items */}
      <div className='item-wrapper'>  
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about"><b>ABOUT</b></NavLink>
          </li>
          <li>
            <NavLink to="/programs"><b>PROGRAMS</b></NavLink>
          </li>
          <li>
            <NavLink to="/contact"><b>REGISTRATION</b></NavLink>
          </li>
          <li>
            <NavLink to="/registration"><b>CONTACT</b></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
