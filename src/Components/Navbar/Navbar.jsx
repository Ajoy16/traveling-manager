import React, { useState } from 'react';
import {FaSearchLocation } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark, faListDots} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import './navbar.scss';

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    // function to toggle navBar

    const showNav =()=>{
        setActive('navBar activeNavbar')
    }

       // function to remove navBar

       const removeNavbar =()=>{
        setActive('navBar')
    }
    return (
       <section className='navBarSection'>
       <header className='header flex'>
        <div className='logoDiv'>
        <a href="#" className='logo flex'>
        <h1> <FaSearchLocation className='icon'/> Travel.</h1>
        </a>
        </div>
        <div className={active}>
            <ul className='navLists flex'>
                <li className="navItem">
                    <a href="#" className="navLink">Home</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Packages</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Shop</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">About</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Pages</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">News</a>
                </li>

                <li className="navItem">
                    <a href="#" className="navLink">Contract</a>
                </li>
                <button className='btn'>
                    <a href="#">BOOK NOW</a>
                </button>

            </ul>
            <div onClick={removeNavbar} className="closeNavbar">
            <FontAwesomeIcon icon={faXmark} className='icon' />
            </div>
               
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <FontAwesomeIcon icon={faListDots} className='icon'/>
        </div>
       </header>
       </section>
    );
};

export default Navbar;
