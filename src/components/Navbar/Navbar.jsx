import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../farebase'

const Navbar = () => {
    const navRef = useRef();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark')
            } else {
                navRef.current.classList.remove('nav-dark')
            }
        })

        // Add click outside handler
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div ref={navRef} className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Brows by languages</li>
                </ul>
            </div>

            <div className="navbar-right">
                <img src={search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='icons' />

                <div className="navbar-profile" ref={dropdownRef}>
                    <img src={profile_img} alt="" className='profile' onClick={toggleDropdown} />
                    <img src={caret_icon} alt="" onClick={toggleDropdown} />
                    <div className={`dropdown ${showDropdown ? 'show' : ''}`}>
                        <p onClick={logout}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
