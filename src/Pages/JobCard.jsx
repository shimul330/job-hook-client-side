import React, { useEffect, useState } from 'react';
import { FaRegClock, FaRupeeSign } from 'react-icons/fa';
import { addToApplyNow, addToFavourite, getToApplyNow, getToFavourite } from '../localStorage';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const JobCard = ({ data }) => {
  const [isFav, setIsFav] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    const applyList = getToApplyNow();
    setIsApplied(applyList.some(j => j.id === data.id));
  }, [data.id]);

  useEffect(() => {
    const favList = getToFavourite();
    setIsFav(favList.some(j => j.id === data.id));
  }, [data.id]);

  const handleApply = () => {
    if (!isApplied) {
      addToApplyNow(data);
      setIsApplied(true);
      toast.success("Apply Successful");
    } else {
      toast.info("Already applied!");
    }

  }
  const handleFavourite = () =>{
    addToFavourite(data)
    setIsFav(true);
    toast.success("Apply Succssfull")
  }

  return (
    <div>
      <div className="bg-[#1e1e1e] text-white   hover:shadow-sm hover:shadow-[#FFD149] rounded-xl p-5 ">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <img src={data.image} alt={data.company} className="w-10 h-10 rounded-2xl object-contain" />
            <div>
              <h2 className="text-base font-semibold">{data.jobTitle}</h2>
              <p className="text-sm text-gray-400">{data.company} • {data.applicants} Applicants</p>
            </div>
          </div>
          <button onClick={handleFavourite} disabled={isFav} className="text-white text-xl">{isFav ? '❤️' : '♡'}</button>
        </div>

        <div className="flex flex-wrap gap-2 mb-3 text-[12px]">
          <span className="bg-yellow-800 text-yellow-300 px-2 py-1 rounded">Expert</span>
          <span className="bg-yellow-800 text-yellow-300 px-2 py-1 rounded">{data.jobType}</span>
          <span className="bg-yellow-800 text-yellow-300 px-2 py-1 rounded">{data.location}</span>
        </div>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{data.description}</p>

        <div className="flex justify-between text-sm text-gray-400">
          <span className="flex items-center gap-1"><FaRupeeSign /> {data.package}</span>
          <span className="flex items-center gap-1"><FaRegClock /> {data.postedDayAgo} days ago</span>
        </div>
        <div className='text-center mt-4'>
          <Link to='/applyIngjob'>
            <button onClick={handleApply}  className={`btn btn-block border-0 bg-[#f5cb4f] ${isApplied? "cursor-not-allowed" : "cursor-pointer"}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;