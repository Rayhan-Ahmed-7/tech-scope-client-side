import React from 'react';
import sony from '../../../images/tv-2.png';
const NewArrival = () => {
    return (
        <div className='w-10/12 mx-auto flex items-center justify-between md:flex-row flex-col mt-10'>
             <div>
                <img src={sony} alt="" />
            </div>
            <div>
                <h2 className='md:text-6xl text-4xl'>New Arrival</h2>
                <h2 className='text-3xl'>Get <span className='text-5xl text-lightred'>50%</span> Discount on</h2>
                <p className='py-2'>Sony 50 Inch Ultra HD 4K Smart Android LED Tv KD</p>
                <button className='my-4 px-4 py-2 bg-lightred rounded-sm text-white'>Get It Now</button>
            </div>
        </div>
    );
};

export default NewArrival;