import React from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import ITE_LOGO from '../assets/ite_logo.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[60px] flex justify-between items-centered px-4 py-2 bg-[#29b6f6] text-[white]'>
        <div>
            <img src={ITE_LOGO} alt="Logo Image" style={{width:'50px'}} />
        </div>

        {/* MENU */}

        <div>
            <ul className='flex'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>TEAM</li>
                <li>CONTACT</li>
                <li>JOIN</li>
            </ul>
        </div>

        {/* HAMBURGER */}
        <div className="hidden">
            <FaBars/>
        </div>
        
        {/* MOBILE MENU*/}
        <ul className="hidden">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
            <li>JOIN</li>
        </ul>



    </div>
  )
}

export default Navbar;