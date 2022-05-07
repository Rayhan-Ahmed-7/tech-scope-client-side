import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { BsArrowLeft } from 'react-icons/bs';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PasswordReset = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleReset = async (data) => {
        console.log(data);
        const email = data.email;
        const res = await sendPasswordResetEmail(email)
        console.log(res);
    }
    return (
        <div className='grid place-items-center'>
            <div className='md:w-4/12 w-11/12 rounded-xl mt-10 bg-[#ffffff] text-gray-800 md:p-10 p-3 custom-shadow'>
                <div className='flex items-center mb-10 '>
                    <h2 className='text-2xl font-bold mr-3'>Reset Password</h2>
                    <div className='h-1 w-24 rounded-md bg-lightred'></div>
                </div>
                <form className='w-full' onSubmit={handleSubmit(handleReset)}>
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
                    {error? <p className='text-rose-500'>{error?.message}</p>:""}
                    <div className='flex justify-between'>
                        <p onClick={() => navigate("/login")} className='flex items-center hover:text-lightred hover:underline cursor-pointer flex-1'>
                            <BsArrowLeft></BsArrowLeft>
                            <span className='ml-3 text-lg'>Back to home</span>
                        </p>
                        <button className='bg-lightred text-white btn-transition py-2 px-4 rounded-3xl cursor-pointer flex items-center' type="submit">
                            {sending?
                            <div className='animate-spin h-6 w-6 rounded-full border-t-2 border-l-2 border-white mr-3'></div>
                            :
                            ""
                            }
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;