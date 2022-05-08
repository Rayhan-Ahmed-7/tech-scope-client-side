import React from 'react';
import img1 from '../../images/top rated/blender.png';
import img2 from '../../images/top rated/tv.png';
import img3 from '../../images/top rated/Hitachi-Fridge.png';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
const TopRatedProduct = () => {
    return (
        <div className='w-10/12 mx-auto my-6'>
            <h2 className='text-center my-8 capitalize text-3xl font-bold text-gray-800'>Our Top Rated Products</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-12 mb-10'>
                <div className='p-4 rounded-2xl shadow-xl'>
                    <img src={img1} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800 mt-2'>NEW GENERATION SMART LED TV PRODUCTS</h2>
                        <p className='flex space-x-1 my-2 text-yellow-400'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <button className='flex items-center font-bold text-gray-700'>Check Now <IoIosArrowDroprightCircle className='text-lightred'></IoIosArrowDroprightCircle></button>
                    </div>
                </div>
                <div className='p-4 rounded-2xl shadow-xl'>
                    <img src={img2} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800 mt-2'>SUPER MIXER GRINDER COLLECTION</h2>
                        <p className='flex space-x-1 my-2 text-yellow-400'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <button className='flex items-center font-bold text-gray-700'>Check Now <IoIosArrowDroprightCircle className='text-lightred'></IoIosArrowDroprightCircle></button>
                    </div>
                </div>
                <div className='p-4 rounded-2xl shadow-xl'>
                    <img src={img3} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800 mt-2'>IMPORTED REFRIGERATOR COLLECTION</h2>
                        <p className='flex space-x-1 my-2 text-yellow-400'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                        <button className='flex items-center font-bold text-gray-700'>Check Now <IoIosArrowDroprightCircle className='text-lightred'></IoIosArrowDroprightCircle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopRatedProduct;