import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import MyProduct from '../MyProduct/MyProduct';
import { BsArrowLeft } from 'react-icons/bs';

const MyProducts = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    useEffect(() => {
        //requesting for user product only using user email and jwt access token
        const userProduct = async () => {
            try {
                const res = await axios.get(`https://ancient-fjord-89568.herokuapp.com/myproducts?email=${user?.email}`,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                } 
                })
                //console.log(res.data);
                setMyProducts(res.data);
                setLoading(false);
            }
            catch(error){
                //console.log(error)
                //signing out the user if he/she doesn't have access token
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                  }
            }
        }
        userProduct();
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    const handleDelete = async (id) => {
        const confirmation = window.confirm("You sure about deleting this item.?");
        if(confirmation){
            setMyProducts(myProducts.filter(product=>id !== product._id))
            const response = await axios.delete(`https://ancient-fjord-89568.herokuapp.com/products/${id}`)
            //console.log(response);
            toast("item is deleted");
        }
    }
    return (
        <div className='min-h-screen w-10/12 mx-auto'>
            <div className='rounded-2xl shadow-xl bg-gray-900 md:w-8/12 w-full mx-auto mt-6'>{myProducts?.length <1 ? <><h2 className='uppercase font-bold tracking-tight md:text-3xl text-xl p-3 text-gray-200 text-justify'>Currently you do not have any product of your own please go to add product and add some product</h2><Link to='/addproduct' className='text-xl flex items-center gap-2 text-white hover:text-lightred hover:underline p-3'><BsArrowLeft></BsArrowLeft>Go to Add Product</Link></> :""}</div>
            {
                myProducts.map(myProduct=><MyProduct key={myProduct._id} myProduct={myProduct} handleDelete={handleDelete}></MyProduct>)
            }
        </div>
    );
};

export default MyProducts;