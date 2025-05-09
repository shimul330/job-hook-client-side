import React from 'react';
import girlImg from '../assets/Girl.png';
import { FcGoogle } from 'react-icons/fc';
// [#FFD149]
const HowItWork = () => {
    return (
        <div className=''>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold text-slate-300 mb-3'>How it <span className='text-[#FFD149]'>Works</span> </h1>
                <p className='text-lg text-slate-200'>Effortlessly navigate through the process and land your dream job.</p>
            </div>

            <div className=' mb-5 md:flex md:items-center md:justify-around'>
                <div className='w-[20rem] md:w-[30rem] relative'>
                    <img src={girlImg} alt=""/>

                    <div className='text-center   w-fit border absolute -right-10 md:-right-6 top-[16%] - border-[#FFD149] rounded-lg px-4 py-3 backdrop-blur-md '>
                        <div >
                            <div className="avatar">
                                <div className="w-15 rounded-full">
                                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                </div>
                            </div>
                        </div>
                        <div className='text-[15px] font-semibold text-slate-300 mt-2 mb-2'>Complete your <br /> profile</div>
                        <div className='text-[10px] text-slate-200'>70% Completed</div>
                    </div>
                </div>
                <div className='space-y-8 pr-3 pl-3 md:pr-0 md:pl-0'>
                    <div className='space-y-3'>
                        <div className='p-1 bg-[#FFD149] rounded-full  mx-auto'>
                            {/* <img className='h-8 w-8' src='../assets/Sales.png' alt="Resume" /> */}
                        </div>
                        <div>
                            <h1 className='text-xl text-slate-300 mb-2 font-semibold'>Build Your Resume</h1>
                            <p className='text-sm text-slate-200'>Create a standout resume with your skills.</p>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className='space-y-3' >
                        <div className='p-1 bg-[#FFD149] rounded-full  mx-auto'>
                            {/* <img className='h-8 w-8' src='../assets/Sales.png' alt="job" /> */}
                        </div>
                        <div>
                            <h1 className='text-xl text-slate-300 mb-2 font-semibold'>Apply for Job</h1>
                            <p className='text-sm text-slate-200'>Find and apply for jobs that match your skills.</p>
                        </div>
                    </div>
                    {/* 3rd */}
                    <div className='space-y-3'>
                        <div className='p-1 bg-[#FFD149] rounded-full  mx-auto'>
                            {/* <img className='h-8 w-8' src='../assets/Sales.png' alt="job" /> */}
                        </div>
                        <div>
                            <h1 className='text-xl text-slate-300 mb-2 font-semibold'>Get Hired</h1>
                            <p className='text-sm text-slate-200'>Connect with employers and start your new job.</p>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    );
};

export default HowItWork;