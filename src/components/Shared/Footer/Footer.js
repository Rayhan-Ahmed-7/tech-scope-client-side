import React from 'react';
import logo from '../../../images/logo-2.svg';

const Footer = () => {
    return (
        <div className='bg-gray-900 mt-8'>
            <div className='w-10/12 mx-auto grid md:grid-cols-4 py-5'>
                <div>
                    <img src={logo} alt="" />
                    <p className='text-gray-300 text-md font-thin'>
                    We believe in digital transformation and technology. and technology is the key to make people life easier.
                    if your look at your daily life you will see electronics everywhere phone, laptop ,water filter, hair dryer everywhere people is using technology.
                    </p>
                </div>
                <div className='text-gray-300 mt-3 md:text-center'>
                    <h2 className='text-2xl text-bold mt-3'>Link</h2>
                    <ul className='space-y-4'>
                        <li>home</li>
                        <li>blogs</li>
                        <li>login</li>
                        <li>sign up</li>
                    </ul>
                </div>
                <div className='text-gray-300 mt-3'>
                <h2 className='text-2xl text-bold mt-3'>Contact Us</h2>
                    <ul className='space-y-4'>
                        <li>Go to contact</li>
                        <li>Address: laksham/bypass</li>
                        <li>Phone: 23455222</li>
                        <li>Email: hello@gmail.com</li>
                    </ul>
                </div>
                <div  className='text-gray-300 mt-3'>
                    <h2 className='text-2xl font-bold mt-3'>News Letter-</h2>
                    <p className='mt-2'>subscribe to our newsletter to get update news.</p>
                    <input className='p-2 my-4 block rounded-md' type="email" name="email"/>
                    <button className='p-2 bg-lightred text-white btn-transition rounded-md'>Subscribe</button>
                </div>
            </div>
            <p></p>
        </div>
    );
};

export default Footer;