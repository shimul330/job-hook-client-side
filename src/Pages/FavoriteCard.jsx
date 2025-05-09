import React from 'react';
import { FaRegClock, FaRupeeSign } from 'react-icons/fa';

const FavoriteCard = ({fav, handleRemoveFavourite}) => {
    

    return (
        <div>
             <div className="bg-[#1e1e1e] text-white   hover:shadow-sm hover:shadow-[#FFD149] rounded-xl p-5 ">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <img src={fav.image} alt={fav.company} className="w-10 h-10 rounded-2xl object-contain" />
                        <div>
                          <h2 className="text-base font-semibold">{fav.jobTitle}</h2>
                          <p className="text-sm text-gray-400">{fav.company}  {fav.applicants} Applicants</p>
                        </div>
                      </div>
                     
                    </div>
            
                    <div className="flex flex-wrap gap-2 mb-3 text-[12px]">
                      <span className="bg-yellow-800 text-yellow-300 px-2 py-1 rounded">Expert</span>
                      <span className="bg-yellow-800 text-yellow-300 px-2 py-1 rounded">{fav.jobType}</span>
                      <span className="bg-yellow-800 text-yellow-300 px-2 py-1 rounded">{fav.location}</span>
                    </div>
            
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{fav.description}</p>
            
                    <div className="flex justify-between text-sm text-gray-400">
                      <span className="flex items-center gap-1"><FaRupeeSign /> {fav.package}</span>
                      <span className="flex items-center gap-1"><FaRegClock /> {fav.postedDayAgo} days ago</span>
                    </div>
                    <div className='text-center mt-4'>
                     
                        <button onClick={()=>handleRemoveFavourite(fav.id)}  className="btn btn-block border-0 bg-[#f5cb4f]"> Cancel Favourite</button>
                      
                    </div>
                  </div>
        </div>
    );
};

export default FavoriteCard;