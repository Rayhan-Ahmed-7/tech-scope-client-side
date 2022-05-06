import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantitys, setQuantity] = useState("");
    const [error,setError] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setQuantity(res.data?.quantity);
            })
    }, [])
    const { name, img, suplierName, description, price, quantity } = product;
    const handleUpdate = async (id) => {
        try {
            if (quantity >= 0) {
                const response = await axios.put(`http://localhost:5000/products/${id}`, { quantity: quantitys - 1 });
                setQuantity(quantitys - 1);
                console.log(response);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const updateQuantity = async (e) => {
        e.preventDefault();
        const newQuantity = parseInt(e.target.number.value);
        if(newQuantity <= 0){
            setError("add a positive number");
            return;
        }else{
            setError("");
        }
        const response = await axios.put(`http://localhost:5000/products/${id}`, { quantity: newQuantity+quantitys});
        setQuantity(newQuantity+quantitys);
        e.target.reset();
    }
    return (
        <div className='xl:w-10/12 w-10/12 mx-auto mt-10 gap-4 flex lg:flex-row flex-col md:items-center'>
            <div className='lg:w-9/12 w-11/12 mx-auto flex lg:flex-row flex-col p-4 rounded-xl shadow-lg'>
                <img className='rounded-xl' src={img} alt="" />
                <div className='ml-5'>
                    <h2 className='text-4xl uppercase font-bold text-gray-800'>{name}</h2>
                    <h2 className='text-2xl mt-3'>Suplier: {suplierName}</h2>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg'>Price: ${price}</p>
                        <p className='text-lg'>Quantity: {quantitys<=0 ? <span className='text-white bg-lightred p-2 rounded-md'>sold Out</span> : quantitys}</p>
                    </div>
                    <p>{description}</p>
                    <button onClick={() => handleUpdate(id)} className='mt-5 px-4 py-2 bg-lightred text-white rounded btn-transition'>Delivered</button>
                </div>
            </div>
            <div className='p-4 rounded-2xl shadow-xl lg:w-auto w-11/12 mx-auto md:mt-0 mt-10'>
                <div className='flex items-center mb-10 '>
                    <h2 className='text-2xl font-bold mr-3'>Stock Items</h2>
                    <div className='h-1 w-24 rounded-md bg-lightred'></div>
                </div>
                <form className='w-full' onSubmit={updateQuantity}>
                    <input className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3" type="number" name="number" placeholder='number' />
                    <p className='text-lightred'>{error? error:""}</p>
                    <div className='flex justify-end'>
                        <button className='bg-lightred text-white btn-transition py-2 px-4 rounded-3xl cursor-pointer' type="submit">
                            Restock
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;