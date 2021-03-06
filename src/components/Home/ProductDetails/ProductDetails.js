import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import { BsArrowRight } from 'react-icons/bs';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [quantitys, setQuantity] = useState("");
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState("");
    useEffect(() => {
        axios.get(`https://ancient-fjord-89568.herokuapp.com/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setQuantity(res.data?.quantity);
                setLoading(false);
            })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    const { _id, name, img, suplierName, description, price, quantity } = product;
    const handleUpdate = async (id) => {
        try {
            if (quantitys >= 1) {
                setQuantity(quantitys - 1);
                const response = await axios.put(`https://ancient-fjord-89568.herokuapp.com/products/${id}`, { quantity: quantitys - 1 });
                console.log(response);
            }
        }
        catch(error){
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
        setQuantity(newQuantity+quantitys);
        const response = await axios.put(`https://ancient-fjord-89568.herokuapp.com/products/${id}`, { quantity: newQuantity+quantitys});
        e.target.reset();
    }
    return (
        <div className='xl:w-10/12 w-11/12 mx-auto min-h-screen '>
        <div className='mt-10 gap-4 flex lg:flex-row flex-col md:items-center'>
            <div className='lg:w-9/12 w-full mx-auto flex lg:flex-row flex-col p-4 rounded-xl shadow-lg'>
                <img className='rounded-xl' src={img} alt="" />
                <div className='md:ml-5 mt-5'>
                    <h2 className='md:text-4xl text-2xl uppercase font-bold text-gray-800'>{name}</h2>
                    <p>Product Id: {_id}</p>
                    <h2 className='text-2xl mt-3'>Suplier: {suplierName}</h2>
                    <div className='flex justify-between my-4'>
                        <p className='text-lg'>Price: ${price}</p>
                        <p className='text-lg'>Quantity: {quantitys===0 ? <span className='text-white bg-lightred p-2 rounded-md'>stock Out</span> : quantitys}</p>
                    </div>
                    <p>{description}</p>
                    <button onClick={() => handleUpdate(id)} className='mt-5 px-4 py-2 bg-lightred text-white rounded btn-transition'>Delivered</button>
                </div>
            </div>
            <div className='p-4 rounded-2xl shadow-xl lg:w-auto w-full mx-auto md:mt-0 mt-10'>
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
            <div className='flex justify-center'>
            <Link className='p-2 bg-lightred rounded-md flex items-center text-white mt-5 btn-transition' to='/manageproducts'>Manage Products <BsArrowRight className='ml-2'></BsArrowRight></Link>
            </div>
        </div>
    );
};

export default ProductDetails;