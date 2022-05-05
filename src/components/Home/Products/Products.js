import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/products')
    .then(res=>{
        console.log(res.data);
        setProducts(res.data);
    })
    },[])
    return (
        <div className='w-10/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-10'>
            {products.map(product=><Product key={product._id} product={product}></Product>)}
        </div>
    );
};

export default Products;