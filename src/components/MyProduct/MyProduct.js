import React from 'react';

const MyProduct = ({ myProduct, handleDelete }) => {
    const { _id, name, suplierName, img, price, description, quantity } = myProduct;
    
    return (
        <div className='md:w-8/12 w-full mx-auto flex md:flex-row flex-col p-2 shadow-xl'>
            
            <img className='rounded-xl' src={img} alt="" />
            <div className='md:ml-5 md:mt-0 mt-5'>
                <h2 className='md:text-3xl text-2xl uppercase font-bold text-gray-800'>{name}</h2>
                <h2 className='text-2xl mt-2'>Suplier: {suplierName}</h2>
                <div className='flex justify-between my-4'>
                    <p className='text-lg'>Price: ${price}</p>
                    <p className='text-lg'>Quantity: {quantity}</p>
                </div>
                <h2 className='text-justify'>{description}</h2>
                <button onClick={() => handleDelete(_id)} className='mt-5 px-4 py-2 bg-lightred text-white rounded btn-transition'>Delete</button>
            </div>
        </div>
    );
};

export default MyProduct;