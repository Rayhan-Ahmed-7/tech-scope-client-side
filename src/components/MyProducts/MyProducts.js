import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [user,loading] = useAuthState(auth);
    useEffect(() => {
        const userProduct = async () => {
            try {
                const res = await axios.get(`https://ancient-fjord-89568.herokuapp.com/myproducts?email=${user?.email}`)
                console.log(res.data);
                setMyProducts(res.data);
            }
            catch(error){
                console.log(error)
            }
        }
        userProduct();
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    const handleDelete = async (id) => {
        const response = await axios.delete(`https://ancient-fjord-89568.herokuapp.com/products/${id}`)
        console.log(response);
        setMyProducts(myProducts.filter(product=>id !== product._id))
    }
    return (
        <div className='min-h-screen w-10/12 mx-auto'>
            <div className='rounded-2xl shadow-xl bg-gray-900 md:w-8/12 w-10/12 mx-auto mt-6'>{myProducts?.length <1 ? <><h2 className='uppercase font-bold tracking-tight text-3xl p-3 text-gray-200 text-justify'>Currently you do not have any product of your own please go to add product and add some product</h2><Link to='/addproduct' className='text-xl text-lightred underline p-3 block'>Go to Add Product</Link></> :""}</div>
            {
                myProducts.map(myProduct=><MyProduct key={myProduct._id} myProduct={myProduct} handleDelete={handleDelete}></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;