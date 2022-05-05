import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { BsGoogle } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div className='mt-6'>
            <div className='flex items-center justify-center mb-4'>
                <div className='h-[2px] w-20 bg-slate-700'></div>
                <p className='mx-4 text-xl -mt-2'>or</p>
                <div className='h-[2px] w-20 bg-slate-700'></div>
            </div>
            <p className='text-lg font-medium text-center'>Continue with-</p>
            <div className='flex justify-center gap-6 mt-4'>
                <button className='flex items-center gap-2 py-2 px-4 bg-blue-800 text-white rounded-md'>
                    <RiFacebookFill className='text-xl'/>
                    <p className='text-lg font-medium'>Facebook</p>
                </button>
                <button className='flex items-center gap-2 py-2 px-4 rounded-md bg-red-500 text-white'>
                    <BsGoogle className='text-xl'/>
                    <p className='text-lg font-medium'>Google</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;