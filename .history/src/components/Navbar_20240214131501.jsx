import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <button onClick={toggleNav}>Menu</button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/programs" activeClassName="active">Programs</NavLink></li>
                <li><NavLink to="/registration" activeClassName="active">Registration</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
