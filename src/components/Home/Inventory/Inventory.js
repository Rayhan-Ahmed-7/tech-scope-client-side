import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:5000/products/${id}`)
        .then(res=>{
            console.log(res.data);
            setProduct(res.data);
        })
    },[])
    const {name,img,suplierName,description,price,quantity} = product;
    return (
        <div>
            <div className='md:w-8/12 w-10/12 mx-auto mt-10 flex p-4 rounded-xl shadow-lg'>
                <img className='rounded-xl' src={img} alt="" />
                <div className='ml-5'>
                    <h2 className='text-4xl uppercase font-bold text-gray-800'>{name}</h2>
                    <h2 className='text-2xl mt-3'>Suplier: {suplierName}</h2>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg'>Price: ${price}</p>
                        <p className='text-lg'>Quantity: {quantity}</p>
                    </div>
                    <p>{description}</p>
                    <button className='mt-5 px-4 py-2 bg-lightred text-white rounded btn-transition'>Delivered</button>
                </div>
            </div>
            <form action="">

            </form>
        </div>
    );
};

export default Inventory;