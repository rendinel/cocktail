import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

//{2} we create the link importing the Link component and adding the path inside to

const Navbar = () => {
  return (
    <nav className=''>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
