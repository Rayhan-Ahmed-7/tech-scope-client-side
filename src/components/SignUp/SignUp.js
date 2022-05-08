import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsArrowRight } from 'react-icons/bs';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleLogin = async (data) => {
        console.log(data);
        const name = data.name;
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        const res = await axios.post('https://ancient-fjord-89568.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', res?.data.accessToken);
    }
    if(user){
        
        navigate(from, { replace: true });
    }
    return (
        <div className='grid place-items-center'>
            <div className='md:w-4/12 w-11/12 rounded-xl mt-10 bg-[#ffffff] text-gray-800 md:p-10 p-3 custom-shadow'>
                <div className='flex items-center mb-10 '>
                    <h2 className='text-2xl font-bold mr-3'>Sign Up</h2>
                    <div className='h-1 w-24 rounded-md bg-lightred'></div>
                </div>
                <form className='w-full' onSubmit={handleSubmit(handleLogin)}>
                    <input {...register("name", { required: "name is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="text"
                        placeholder='name'
                    />
                    {errors.name?.message && (
                        <p className='ml-4 mb-2 text-lg text-rose-600'>
                            {errors.name?.message}
                        </p>
                    )}
                    <input {...register("email", { required: "email is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="email"
                        placeholder='email'
                    />
                    {errors.email?.message && (
                        <p className='ml-4 mb-2 text-lg text-rose-600'>
                            {errors.email?.message}
                        </p>
                    )}
                    <input {...register("password", { required: "password is required.!" })}
                        className="w-full rounded-3xl bg-slate-200 focus:outline-none mb-4 p-3"
                        type="password"
                        placeholder='password'
                    />
                    {errors.password?.message && (
                        <p className='ml-4 mb-2 text-lg text-rose-600'>
                            {errors.password?.message}
                        </p>
                    )}
                    {error ? <p className='text-rose-500'>{error?.message}</p> : ""}
                    <div className='flex justify-between'>
                        <p onClick={() => navigate("/login")} className='flex items-center hover:text-lightred hover:underline cursor-pointer flex-1'>
                            <span className='mr-3 text-lg'>Signed UP.? login</span>
                            <BsArrowRight></BsArrowRight>
                        </p>
                        <button className='bg-lightred text-white btn-transition py-2 px-4 rounded-3xl cursor-pointer flex items-center' type="submit">
                            {loading ?
                                <div className='animate-spin h-6 w-6 rounded-full border-t-2 border-l-2 border-white mr-3'></div>
                                :
                                ""
                            }
                            Sign Up
                        </button>
                    </div>
                </form>
                <Link to='forget-password' className='ml-3 text-lg text-right block mt-4 cursor-pointer hover:underline hover:text-lightred'>Forget password?</Link>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;