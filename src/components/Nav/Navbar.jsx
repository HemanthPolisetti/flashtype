import React from 'react'
import logo from './../../assets/logo.png'
import './Navbar.css'

export default function Navbar(){
    return(
        <div className='navbar'>
        <img src={logo} alt='logo' className='logo'></img>
        <h1 className='nav-header'>FlashType</h1>
        </div>
    )
}