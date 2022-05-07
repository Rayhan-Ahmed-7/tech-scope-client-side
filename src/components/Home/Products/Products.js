import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../../Hooks/useInventories';
import Loading from '../../Loading/Loading';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts,loading] = useInventories();
    const navigate = useNavigate();
    const handleUpdate = (id)=>{
        navigate(`/product/${id}`);
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <>
            <h2 className='text-center text-4xl font-extrabold mt-10 text-gray-800'>Products</h2>
            <div className='md:w-10/12 w-11/12 mx-auto grid md:grid-cols-3 grid-cols-1 gap-20 mt-20'>
                {products.slice(0, 6).map(product => <Product key={product._id} product={product} handleUpdate={handleUpdate}></Product>)}
            </div>
        </>
    );
};

export default Products;