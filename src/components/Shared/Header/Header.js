import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri';
import logo from '../../../images/logo.svg';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const [visible, setVisible] = useState(false);
    const handleSignOut = ()=>{
        signOut(auth)
    }
    return (
        <header className='py-4 px-2 bg-white custom-shadow'>
            <nav className='w-11/12 mx-auto flex justify-between items-center relative'>
                <div className="logo">
                    <Link to='/'>
                        <img className='md:h-12 h-10' src={logo} alt="logo" />
                    </Link>
                </div>
                {/* <div className=''> */}
                    <span onClick={() => setVisible(!visible)} className='md:hidden visible cursor-pointer'>
                        {!visible ?
                            <RiMenu4Fill className='text-3xl'></RiMenu4Fill>
                            :
                            <RiCloseFill className='text-3xl'></RiCloseFill>
                        }
                    </span>
                    <ul className={`${visible ? 'opacity-100 right-2' : 'opacity-100 -right-64'} flex flex-col md:flex-row md:space-x-6 space-x-0 md:space-y-0 space-y-4 text-lg absolute md:static top-10 right-2 md:bg-transparent md:opacity-100 bg-white/80 backdrop-blur-sm rounded-md p-5 md:p-0 transition-all duration-300 z-100 md:items-center md:w-auto w-52 border-y-4 md:border-0 border-y-rose-200`}>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => (isActive ? 'text-lightred navLink active' : "hover:text-lightred navLink text-gray-900"
                                )}
                            >
                                Home
                            </NavLink>
                        </li>
                        {
                            user?
                            <>
                            <li>
                            <NavLink
                                to='/manageproducts'
                                className={({ isActive }) => (isActive ? 'text-lightred navLink active' : "hover:text-lightred navLink text-gray-900"
                                )}
                            >
                                Manage Products
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to='/addproduct'
                                className={({ isActive }) => (isActive ? 'text-lightred navLink active' : "hover:text-lightred navLink text-gray-900"
                                )}
                            >
                                Add Product
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to='/myproducts'
                                className={({ isActive }) => (isActive ? 'text-lightred navLink active' : "hover:text-lightred navLink text-gray-900"
                                )}
                            >
                                My Products
                            </NavLink>
                            </li>
                            </>
                            :
                            ""
                        }
                        <li>
                            <NavLink
                                to='/blogs'
                                className={({ isActive }) => (isActive ? 'text-lightred navLink active' : "hover:text-lightred navLink text-gray-900"
                                )}
                            >
                                Blogs
                            </NavLink>
                        </li>
                        {
                            user ?
                                <button onClick={handleSignOut} className='px-3 py-2 bg-lightred rounded-3xl text-white'>SignOut</button>
                                :
                                <li>
                                    <NavLink
                                        to='/login'
                                        className={({ isActive }) => (isActive ? 'text-lightred navLink active' : "hover:text-lightred navLink text-gray-900"
                                        )}
                                    >
                                        Login
                                    </NavLink>
                                </li>
                        }
                    </ul>
                {/* </div> */}
            </nav>
        </header>
    );
};

export default Header;