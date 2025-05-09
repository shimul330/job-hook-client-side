import React from 'react';
import { Link, Links } from 'react-router';

const Empty = () => {
    return (
        <div>
            <img className='w-[25rem] mx-auto'   src="../../src/assets/Boy.png" alt="" />
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-[#FFD149]'>You are not a applying job! <br /> can you choice the anthor job. And apply the botton</h1>
                <Link to='/findjob'>
                <button className='btn bg-[#FFD149] mt-4 '>Find Any Job</button>
                </Link>
            </div>
            

        </div>
    );
};

export default Empty;