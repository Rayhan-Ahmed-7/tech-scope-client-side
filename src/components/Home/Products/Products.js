import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Loading from '../../Loading/Loading';
import Product from '../Product/Product';
import { BsArrowRight } from 'react-icons/bs';

const Products = () => {
    const [products,setProducts,loading] = useProducts();
    const navigate = useNavigate();
    const handleUpdate = (id)=>{
        navigate(`/product/${id}`);
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='md:w-10/12 w-11/12 mx-auto'>
            <h2 className='text-center text-4xl font-extrabold mt-10 text-gray-800'>Products</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 mt-20'>
                {products.slice(0, 6).map(product => <Product key={product._id} product={product} handleUpdate={handleUpdate}></Product>)}
            </div>
            <div className='flex justify-end'>
            <Link className='p-2 bg-lightred rounded-md flex items-center text-white mt-5 btn-transition' to='/manageproducts'>Manage Products <BsArrowRight className='ml-2'></BsArrowRight></Link>
            </div>
        </div>
    );
};

export default Products;