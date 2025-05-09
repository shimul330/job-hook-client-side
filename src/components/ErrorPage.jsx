import React from 'react';

const ErrorPage = () => {
    return (
        <div className='bg-black min-h-screen'>
            <figure className='w-[25rem] mx-auto'>
                <img   src="../../src/assets/Girl.png" alt="" />
            </figure>
            <h1 className='text-slate-200 text-2xl font-bold text-center'><span className='text-red-600'>Sorry</span>! Couldn't find your page.</h1>
           
        </div>
    );
};

export default ErrorPage;