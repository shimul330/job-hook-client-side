import React from 'react';


const ApplySuceCard = ({ success, handleRemoveApplyJob }) => {
    const { jobTitle,
        company,
        postedDayAgo,
        id,
        
        experience,
        jobType,
        location,
     
        image } = success;

       

    return (
        <div>
            <div className="border  bg-[#1e1e1e] text-white border-[#FFD149] rounded-xl p-5 shadow-md hover:shadow-lg transition duration-300 max-w-md">
                <div className="flex items-center gap-3 mb-3">
                    <img src={image} alt={jobTitle} className="w-10 h-10 object-cover rounded-full" />
                    <div>
                        <h3 className="text-sm font-medium text-slate-200">{jobTitle}</h3>
                        <p className="text-xs text-slate-300">{postedDayAgo} days ago</p>
                    </div>
                </div>

                <h2 className="text- font-semibold mb-2">{company}</h2>

                <div className="flex gap-2 mb-4">
                    <span className="bg-[#FFD149] text-gray-700 text-xs px-3 py-1 rounded-full">{jobType}</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{experience}</span>
                </div>
                <div className='mb-3 mt-2'>
                    <h1 className='text-sm text-green-500'>Apply seccssfull!</h1>
                </div>

               

                <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-200">{location}</span>
                    <button onClick={()=> handleRemoveApplyJob(id)} className="bg-[#FFD149] text-black text-sm px-4 py-2 rounded-md hover:text-white hover:shadow-md hover:shadow-[#FFD149] hover:bg-gray-800">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ApplySuceCard;