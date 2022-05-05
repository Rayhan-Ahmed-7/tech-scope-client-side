import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import logo from '../../../images/logo.svg';
import './Header.css';

const Header = () => {
    const [visible,setVisible] = useState(false);
    return (
        <header className='py-4 px-2 bg-white custom-shadow'>
            <nav className='w-11/12 mx-auto flex justify-between items-center'>
                <div className="logo">
                    <Link to='/'>
                        <img className='md:h-12 h-10' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='relative'>
                    <span onClick={()=>setVisible(!visible)} className='md:hidden visible cursor-pointer'>
                        {!visible?
                        <RiMenu4Fill className='text-3xl'></RiMenu4Fill>
                        :
                        <RiCloseFill className='text-3xl'></RiCloseFill>
                        }
                    </span>
                    <ul className={`${visible? 'opacity-100 translate-x-0':'opacity-0 translate-x-64'} flex flex-col md:flex-row md:gap-6 gap-4 md:translate-x-0 text-lg absolute md:static top-10 right-2 md:bg-transparent md:opacity-100 bg-white/80 backdrop-blur-sm rounded-md p-5 md:p-0 transition-all duration-300 z-10 md:items-center md:w-auto w-52 border-y-4 md:border-0 border-y-rose-200`}>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'text-lightgreen navLink active' : "hover:text-lightgreen navLink text-gray-900"
                                )}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => (isActive ? 'text-lightgreen navLink active' : "hover:text-lightgreen navLink text-gray-900"
                                )}
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'text-lightgreen navLink active' : "hover:text-lightgreen navLink text-gray-900"
                                )}
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;