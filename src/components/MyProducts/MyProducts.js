import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProducts = () => {
    const [myProducts,setMyProducts] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(()=>{
        const userProduct = async()=>{
            const {data} = axios.get(`https://ancient-fjord-89568.herokuapp.com/myproduct?email=${user?.email}`)
            console.log(data);
            setMyProducts(data);
        }
        userProduct();
    },[])
    return (
        <div className='h-screen'>
            <h2>{myProducts?.length}</h2>
        </div>
    );
};

export default MyProducts;