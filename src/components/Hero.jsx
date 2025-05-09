import React from 'react';
import boyImg from '../../src/assets/Boy.png'
import { CiSearch } from 'react-icons/ci';

import { IoSearch } from 'react-icons/io5';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
    <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      
    >
        <div className=' mb-5 md:flex md:items-center md:justify-around' >
            <div>
                <h1 className='text-5xl font-semibold text-slate-100 leading-tight'>Find your <span className='text-[#FFD149]'>dream</span> <br /> <span className='text-[#FFD149] '>job</span> with us</h1>
                <p className='text-base font-medium text-slate-200 mt-8'>Good life begins with a good company. Start explore <br /> thousands of jobs in one place</p>
                <div className='flex items-center gap-4 mt-7'>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend text-slate-100">Job Title</legend>
                        <input type="text" className="input bg-[#2D2D2D] text-slate-100  " placeholder="Software Engineer" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-slate-100">Job Type</legend>
                        <input type="text" className="input bg-[#2D2D2D] text-slate-100 " placeholder="Fulltime" />
                    </fieldset>
                    <div className='h-full w-20 bg-[#FFD149] hover:bg-amber-500 flex justify-center rounded-2xl py-3 px-3'>
                        <IoSearch className='h-[85%] w-[85%] text-white font-bold ' />
                    </div>



                </div>
            </div>
            <div className='w-[25rem] md:w-[30rem] relative'>
                <img src={boyImg} alt="" />
                <div className='w-fit border absolute top-[50%] hidden md:block  md:-right-10 border-[#FFD149] rounded-lg px-5 py-3 backdrop-blur-md'>
                    <div className='text-center mb-1 text-slate-200'>10k Got Job</div>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-10">
                                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-10">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-10">
                                <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-white text-black-content w-10">
                                <span>+9k</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-fit border absolute  -left-4 md:-left-10 top-[28%] - border-[#FFD149] rounded-lg px-5 py-3 backdrop-blur-md space-y-2'>
                    <div className='flex items-center justify-center gap-3'>
                        <FcGoogle size={30} />
                        <div>
                            <h2 className='font-medium text-sm text-slate-200'>Software Engineer</h2>
                            <p className='font-medium text-sm text-slate-100'>New York</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <h2 className='text-slate-100 text-[12px]'>1 day ago</h2>
                        <h2  className='text-slate-100 text-[12px]'>120 Applicants</h2>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    );
};

export default Hero;