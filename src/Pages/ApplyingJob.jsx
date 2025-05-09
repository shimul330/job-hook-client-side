import React, { useEffect, useState } from 'react';
import { getToApplyNow, removeApplyJob } from '../localStorage';
import ApplySuceCard from './ApplySuceCard';
import Empty from './Empty';
import { toast } from 'react-toastify';

const ApplyingJob = () => {
      const [jobApplyNow, setJobApplyNow] = useState([]);
      
      useEffect(()=>{
        const savedApplyData = getToApplyNow();
        setJobApplyNow(savedApplyData);
      },[])

      const handleRemoveApplyJob = (id) =>{
        removeApplyJob(id);
        setJobApplyNow(getToApplyNow())
        toast.warning("Cancel Successfull!")
    }

      if (jobApplyNow.length < 1) return <Empty></Empty>
    return (
        <div>
            <h1 className=' text-center text-2xl mb-12 font-bold text-[#FFD149]'> Applying Now  </h1>
            {
                
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto'>
                {
                    jobApplyNow.map(success=> <ApplySuceCard key={success.id} success={success} handleRemoveApplyJob={handleRemoveApplyJob} ></ApplySuceCard> )
                }
            </div>
        </div>
    );
};

export default ApplyingJob;