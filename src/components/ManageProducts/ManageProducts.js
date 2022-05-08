import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './ManageProducts.css';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { toast } from 'react-toastify';
import useProducts from '../../Hooks/useProducts';

const ManageProducts = () => {
    //https://ancient-fjord-89568.herokuapp.com
    const [products,setProducts,loading] = useProducts();
    console.log(products);
    const handleDelete = async(id)=>{
        const confirmation = window.confirm("You sure about deleting this item.?");
        if(confirmation){
            setProducts(products.filter(product=>id !== product._id))
            const response = await axios.delete(`https://ancient-fjord-89568.herokuapp.com/products/${id}`)
            toast("item is deleted");
        }
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <>
            <div className='md:w-10/12 w-full min-h-screen md:p-0 p-2 mx-auto mt-10 md:overflow-auto overflow-x-scroll'>
            <table className='border-2 border-collapse w-full p-2 '>
                <thead className='bg-lightred text-white'>
                    <tr className='h-12'>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Suplier</th>
                        <th>Price</th>
                        <th>quantity</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => <tr key={product._id}>
                        <td><img className='w-10 h-10 rounded-full' src={product.img} alt="" /></td>
                        <td>{product.name}</td>
                        <td>{product.suplierName}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td className='text-center'><button onClick={()=>handleDelete(product._id)} className='bg-lightred p-2 rounded-md text-white'><FaTrash></FaTrash></button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
            <div className='flex justify-center'>
            <Link className='p-2 bg-lightred rounded-md flex items-center text-white mt-5 btn-transition' to='/addproduct'>Add New Product<BsArrowRight className='ml-2'></BsArrowRight></Link>
            </div>
        </>
    );
};

export default ManageProducts;