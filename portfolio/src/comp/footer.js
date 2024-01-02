import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='bottom_container'>
        <div className='logo_container'>
        <Link to='/' className='logo'><h2>arts</h2></Link></div>
                <div className='nav'>
                    <ul>
                        <li><Link to='/work' className='link'>Work</Link></li>
                        <li><Link to='/contact' className='link'>Contact</Link></li>
                    </ul>
                </div>
        </div>
    </div>
    </>
  )
}

export default Footer