import React, { use } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const catagoryJobPromise = fetch('/catagoryJob.json').then(res => res.json());

const JobCatagory = () => {
    const catagoryData = use(catagoryJobPromise);
    // const {name, description, image, new_jobs_posted} = catagoryData;

    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl text-slate-200 font-semibold'>Browse <span className='text-[#FFD149]'>Job</span> Category</h1>
                <p className='text-lg mt-3 text-slate-300'>Explore diverse job opportunities tailored to your skills. Start your career <br /> journey today!</p>
            </div>
       
            <Carousel
            className='mt-5'
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop
                autoPlay={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button
                            onClick={onClickHandler}
                            title={label}
                            className="absolute opacity-75 hover:opacity-100 left-2 top-1/2 transform -translate-y-1/2 bg-[#FFD149] p-2 rounded-full z-10"
                        >
                            <FaArrowLeft />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button
                            onClick={onClickHandler}
                            title={label}
                            className="absolute opacity-75 hover:opacity-100 right-2 top-1/2 transform -translate-y-1/2 bg-[#FFD149] p-2 rounded-full z-10"
                        >
                            <FaArrowRight />
                        </button>
                    )
                }
            >
                {
                    catagoryData.map((catagory, index) => (
                        <div key={index} className='grid items-center gap-4 mt-7 w-64 mx-auto border hover:shadow-lg hover:shadow-[#FFD149] border-[#FFD149] p-4 rounded-2xl'>
                            <div className='p-2 bg-[#FFD149] rounded-full w-fit mx-auto'>
                                <img className='h-8 w-8' src={catagory.image} alt="icon" />
                            </div>
                            <div className='text-slate-100 text-xl font-semibold text-center'>{catagory.name}</div>
                            <div className='text-sm text-center text-slate-300'>{catagory.description}</div>
                            <div className='text-[#ffd149] text-lg text-center'>{catagory.new_jobs_posted}+ new job posted</div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default JobCatagory;