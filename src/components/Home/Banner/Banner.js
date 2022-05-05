import React from 'react';
import banner from '../../../images/electronics.png';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center md:flex-row flex-col'>
            <div className='flex-1 md:order-1 order-2'>
                <small className='text-lg l-spacing text-[#2B2B2B] font-medium'>TECH SCOPE</small>
                <h2 className='md:text-6xl text-4xl font-fast py-4 text-[#2B2B2B]'>ELECTRONICS IS <br /> <span className='text-lightgreen'>THE FUTURE</span></h2>
                <p className='text-[#2B2B2B] text-lg tracking-tight text-justify'>Electronic devices helps us to enhance speaking, listening, and creative skills. Ease of Access to Information. Saves Time. Ease of Mobility. Cost Efficiency.These make our lives more convenient and easy and builds communication faster and easier.</p>
                <button className='my-4 px-4 py-2 bg-[#2BB673] rounded-sm text-white hover:bg-[#24d881]'>CHECKOUT NOW</button>
            </div>
            <div className='flex-1 md:order-2 order-1'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;