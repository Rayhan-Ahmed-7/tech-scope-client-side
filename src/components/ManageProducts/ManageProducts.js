import React from 'react';
import useInventories from '../../Hooks/useInventories';
import { FaTrash } from 'react-icons/fa';
import './ManageProducts.css';
import axios from 'axios';

const ManageProducts = () => {
    const [products,setProducts] = useInventories();
    console.log(products);
    const handleDelete = async(id)=>{
        const response = axios.delete(`http://localhost:5000/products/${id}`)
        console.log(response);
        setProducts(products.filter(product=>id !== product._id))
    }
    return (
        <div className='md:w-10/12 w-full md:p-0 p-2 mx-auto mt-10 mb-6 overflow-x-scroll'>
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
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td className='text-center'><button onClick={()=>handleDelete(product._id)} className='bg-lightred p-2 rounded-md text-white'><FaTrash></FaTrash></button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;