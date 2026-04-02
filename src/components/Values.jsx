import React from 'react';

const Values = () => {
    return (
        <div className='flex justify-around bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-14 mb-30'> 
            <div className='text-center'>
                <h1 className='text-white text-[60px] font-extrabold'>50K+</h1>
                <p className='text-white text-[24px] font-medium'>Active Users</p>
            </div>
            <div className='text-center border-white border-r border-l px-30'>
                <h1 className='text-white text-[60px] font-extrabold'>200+</h1>
                <p className='text-white text-[24px] font-medium'>Premium Tools</p>
            </div>
            <div className='text-center '>
                <h1 className='text-white text-[60px] font-extrabold'>4.9</h1>
                <p className='text-white text-[24px] font-medium'>Ratting</p>
            </div>
        </div>
    );
};

export default Values;