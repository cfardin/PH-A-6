import React from 'react';

const Values = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-14 mb-30'>
            
            <div className='text-center py-6'>
                <h1 className='text-white text-[60px] font-extrabold'>50K+</h1>
                <p className='text-white text-[24px] font-medium'>Active Users</p>
            </div>

            <div className='text-center py-6 px-8
                border-white border-t border-b
                md:border-t-0 md:border-b-0 md:border-l md:border-r'>
                <h1 className='text-white text-[60px] font-extrabold'>200+</h1>
                <p className='text-white text-[24px] font-medium'>Premium Tools</p>
            </div>

            <div className='text-center py-6'>
                <h1 className='text-white text-[60px] font-extrabold'>4.9</h1>
                <p className='text-white text-[24px] font-medium'>Rating</p>
            </div>

        </div>
    );
};
export default Values;