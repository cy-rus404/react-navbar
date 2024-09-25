import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src='' alt=''className='logo'/>
        <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Features</li>
            <li>About</li>

            <div className='search-box'>
                <input type='text' placeholder='Search'/>

            </div>

        </ul>
    </div>
  )
}

export default Navbar
