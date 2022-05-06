import React from 'react';

const Product = ({product,handleUpdate}) => {
    const {name,suplierName,img,quantity,price,description} = product;
    
    return (
        <div className='bg-white shadow-xl hover:shadow-2xl transition-all p-6 rounded-3xl relative flex flex-col'>
            <img className='w-[70%] rounded-3xl relative -top-16 -mb-12 left-0 right-0 mx-auto shadow-lg' src={img} alt="" />
            <div className=''>
            <h2 className='text-2xl'>{name}</h2>
            <h2>Suplier Name: {suplierName}</h2>
            <div className='flex justify-between my-4'>
                <p className='text-lg'>Price: <span className='text-white bg-lightred px-2 text-sm py-1 rounded-md'>${price}</span></p>
                <p className='text-lg'>Quantity: <span className='text-white bg-lightred px-2 text-sm py-1 rounded-md'>{quantity}</span></p>
            </div>
            <p>{description}</p>
            <button onClick={()=>handleUpdate(product._id)} className='bg-lightred px-3 py-2 text-white mt-4 rounded-md btn-transition'>Update</button>
            </div>
        </div>
    );
};

export default Product;