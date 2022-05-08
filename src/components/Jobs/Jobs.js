import React from 'react';
import { MdLocationPin } from 'react-icons/md';
const Jobs = () => {
    return (
        <div className='min-h-screen w-10/12 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
            <div className='p-4 bg-slate-800 text-gray-300 rounded-2xl'>
                <h2 className='text-xl'>Warehouse Executive</h2>
                <strong className='flex items-center my-2'><MdLocationPin className='text-yellow-300'></MdLocationPin>Bangladesh</strong>
                <p><strong className='text-lg'>Job Responsibilities: </strong> Build up and maintain strong and deep knowledge of the overall organizational process, product information and configuration, and systems used daily by the customer fulfillment team.</p>
                <button className='p-2 bg-green-500 text-white rounded-3xl mt-2'>Apply Now</button>
            </div>
            <div className='p-4 bg-slate-800 text-gray-300 rounded-2xl'>
                <h2 className='text-xl'>Helper, Warehouse</h2>
                <strong className='flex items-center my-2'><MdLocationPin className='text-yellow-300'></MdLocationPin>Bangladesh</strong>
                <p><strong className='text-lg'>Job Responsibilities: </strong>  Labelling products.Pick and pack activities.Ability to handle physical workload.Ability to multitask and prioritize.Assemble, address, and transfer products</p>
                <button className='p-2 bg-green-500 text-white rounded-3xl mt-2'>Apply Now</button>
            </div>
            <div className='p-4 bg-slate-800 text-gray-300 rounded-2xl'>
                <h2 className='text-xl'>Senior Warehouse In-Charge</h2>
                <strong className='flex items-center my-2'><MdLocationPin className='text-yellow-300'></MdLocationPin>Bangladesh</strong>
                <p><strong className='text-lg'>Job Responsibilities: </strong>  Plan, organize, coordinate and manage the warehouse operations. Ensure on-time delivery of product as per requirements. Oversee day-to-day warehouse operations, supervise </p>
                <button className='p-2 bg-green-500 text-white rounded-3xl mt-2'>Apply Now</button>
            </div>
            <div className='p-4 bg-slate-800 text-gray-300 rounded-2xl'>
                <h2 className='text-xl'>Warehouse Assistant</h2>
                <strong className='flex items-center my-2'><MdLocationPin className='text-yellow-300'></MdLocationPin>Ukhia, Chittagong</strong>
                <p><strong className='text-lg'>Job Responsibilities: </strong>  Ensure stock management procedures (stock cards, records, filling, and identification) Ensure proper identification of all arrival/departure material (quantity, quality, and delivery)</p>
                <button className='p-2 bg-green-500 text-white rounded-3xl mt-2'>Apply Now</button>
            </div>
            <div className='p-4 bg-slate-800 text-gray-300 rounded-2xl'>
                <h2 className='text-xl'>Jr. Warehouse Officer - Finance & Accounts</h2>
                <strong className='flex items-center my-2'><MdLocationPin className='text-yellow-300'></MdLocationPin>Dhaka</strong>
                <p><strong className='text-lg'>Job Responsibilities: </strong>  Organize Warehouse Management works, such as: inbound, outbound, bin-check, GR-check .Complete inventory booking in the ERP system</p>
                <button className='p-2 bg-green-500 text-white rounded-3xl mt-2'>Apply Now</button>
            </div>
            
            </div>
        </div>
    );
};

export default Jobs;