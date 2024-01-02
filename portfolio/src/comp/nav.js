import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <>
    <div className='nav_container'>
        <div className='logo_container'>
        <Link to='/' className='logo'><h2>arts</h2></Link>
        </div>
        <div className='links'>
            <ul>
                <li>
                    <Link to='/work' className='link'>Work</Link>
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav