import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const handleAddProduct = async(data)=>{
        console.log(data);
        const res = axios.post("https://tech-scope.onrender.com/products",{product:data})
        console.log(res);
    }
    return (
        <div className='grid place-items-center'>
            <div className='md:w-4/12 w-10/12 rounded-xl mt-10 bg-[#ffffff] text-gray-800 p-10 custom-shadow'>
                <div className='flex flex-col items-center mb-10 '>
                    <h2 className='text-2xl font-bold mr-3'>Add A New Product</h2>
                    <div className='h-1 w-44 rounded-md bg-lightred'></div>
                </div>
                <form className='w-full' onSubmit={handleSubmit(handleAddProduct)}>
                <input {...register("email", { required: "email is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="email"
                        placeholder='email'
                        value={user? user.email:""}
                        readOnly
                    />
                    {errors.email?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.email?.message}
                        </p>
                    )}
                    <input {...register("name", { required: "name is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="text"
                        placeholder='product name'
                    />
                    {errors.name?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.name?.message}
                        </p>
                    )}
                    <input {...register("suplierName", { required: "suplier name is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="text"
                        placeholder='suplier name'
                    />
                    {errors.suplierName?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.suplierName?.message}
                        </p>
                    )}
                    <input {...register("img", { required: "img is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="text"
                        placeholder='add img url'
                    />
                    {errors.img?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.img?.message}
                        </p>
                    )}
                    <input {...register("price", { required: "price is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="number"
                        min='1'
                        placeholder='add price'
                    />
                    {errors.price?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.price?.message}
                        </p>
                    )}
                    <input {...register("quantity", { required: "quantity is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="number"
                        min='1'
                        placeholder='add quantity'
                    />
                    {errors.quantity?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.quantity?.message}
                        </p>
                    )}
                    <textarea {...register("description", { required: "description is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="text"
                        placeholder='add description'
                    />
                    {errors.description?.message && (
                        <p className='ml-4 mb-2 -mt-2 text-lg text-rose-600'>
                            {errors.description?.message}
                        </p>
                    )}
                    <div className='flex justify-between'>
                        <button className='bg-lightred text-white btn-transition py-2 px-4 rounded-3xl cursor-pointer flex items-center' type="submit">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;