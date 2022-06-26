import React, {useState} from 'react'

import {NavLink, Link, Outlet} from 'react-router-dom'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);


    const toggleMenu = () => {
        setToggle(!toggle);
    }
  return (
    <>
    <div className='navig'>
       <Link className='logo' to="/">SPENCER</Link>
        <div className='hamburger' onClick={toggleMenu}>H</div>
        <nav className={toggle ? 'nav-display': "null"}>
            <ul>
                <li><NavLink to="/" className={({isActive})=> (isActive? "Active" : "Link")}>Home</NavLink></li>
                <li><NavLink to="/services"  className={({isActive})=> (isActive? "Active" : "Link")}>Services</NavLink></li>
                <li><NavLink to="/contact"  className={({isActive})=> (isActive? "Active" : "Link")}>Contact</NavLink></li>
                <li><NavLink to="/products"  className={({isActive})=> (isActive? "Active" : "Link")}>Products</NavLink></li>
            </ul>
            <button className='btn'>
                Login
            </button>
        </nav>
        </div>
        <Outlet />
        </>
  )
}



export default Navbar