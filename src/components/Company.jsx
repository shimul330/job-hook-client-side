import React from 'react';
import Marquee from 'react-fast-marquee';


const Company = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-slate-200 text-center'>Trusted By <span className='text-[#FFD149] '>1000+</span> Companies</h2>
            <Marquee className=' flex items-center  mt-5  '>
            
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Amazon.png" alt="" />
                </div>
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Figma.png" alt="" />
                </div>
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Meta.png" alt="" />
                </div>
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Netflix.png" alt="" />
                </div>
             
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Pinterest.png" alt="" />
                </div>
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Slack.png" alt="" />
                </div>

                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Spotify.png" alt="" />
                </div>
                <div className='mr-6'>
                    <img className='w-30' src="../../src/assets/Walmart.png" alt="" />
                </div>



            </Marquee>






        </div>
    );
};

export default Company;