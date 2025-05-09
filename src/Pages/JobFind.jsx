// JobFilterBar.jsx
import React, { use, useState } from 'react';
import { FaSearchLocation, FaBriefcase, FaFilter } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import JobCard from './JobCard';

const jobCircularPromise = fetch('/jobCircular.json').then(res => res.json());

const JobFind = () => {
  const circularData = use(jobCircularPromise);

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
 

  const filteredData = circularData.filter((item) => {
    return (
      item.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()) &&
      item.location.toLowerCase().includes(location.toLowerCase()) &&
      item.experience.toLowerCase().includes(experience.toLowerCase()) &&
      item.jobType.toLowerCase().includes(jobType.toLowerCase())
      
    );
  });

  return (

    <div >
      <div className="flex bg-[#1f1f1f] p-4 rounded-lg justify-between gap-4 text-white">
        {/* Job Title */}
        <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-md w-full">
          <BiSearchAlt2 className="text-yellow-400" />
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="bg-transparent outline-none w-full placeholder:text-gray-400"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-md w-full cursor-pointer">
          <FaSearchLocation className="text-yellow-400" />
          <input
            type="text"
            placeholder="location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            className="bg-transparent outline-none w-full placeholder:text-gray-400"
          />
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-md w-full cursor-pointer">
          <FaBriefcase className="text-yellow-400" />
          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="bg-transparent outline-none w-full placeholder:text-gray-400"
          />
        </div>

        {/* Job Type */}
        <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-2 rounded-md w-full cursor-pointer">
          <MdWork className="text-yellow-400" />
          <input
            type="text"
            placeholder="Job Type"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="bg-transparent outline-none w-full placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 mt-10'>
        {
          filteredData.map(data => <JobCard key={data.id} data={data} ></JobCard>)
        }
      </div>
    </div>
  );
};

export default JobFind;
