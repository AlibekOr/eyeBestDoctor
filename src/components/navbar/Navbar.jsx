import React from 'react'
import { PhoneFilled } from "@ant-design/icons"
import Logo from "../../util/images/Logo1.png"
import "./navbar.scss"
const Navbar = () => {
    return (
        <div className='navBar '>
            <div className="innerNavbar">
                <img className='logo' src={Logo} alt="Logo" />
                <div className='logoTitle'>Eye Logo </div>
            </div>
            <ul className="innerNavbar li">
                <li>Home</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Pages</li>
            </ul>
            <div className="innerNavbar">
                <p className='contact'>+9989-91-302-31-32</p>
                <PhoneFilled className='contactPhone' />
            </div>

        </div>

    )
}

export default Navbar