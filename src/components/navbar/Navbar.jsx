import React from 'react'
import Price from '../price/Price'
import './navbar.css'
import { NavLink as Link, NavLink } from 'react-router-dom';
import navimage from "../../img/WhatsApp_Image_2022-07-26_at_11.03.05_PM-removebg-preview.png"


function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className="left">
                    <img src={navimage} className="imageNav" alt="" />
                </div>
                <div className="center">


                </div>
                <div className="right">
                    <div className="linksnavbar">
                        <NavLink className="links" to='/home'>Home</NavLink>
                        <NavLink className="links" to='/iomodule'>How to use</NavLink>
                        <NavLink className="links" to='/inputmodel'>Models</NavLink>
                    </div>

                    <div className="btn">

                        <NavLink className="signin" to='./page2'>Join Us</NavLink>

                    </div>
                </div>



            </div>
            <Price />
        </>
    )
}

export default Navbar