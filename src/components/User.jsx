import React from 'react';

const User = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4  '>
            { /* 1st person */}
            <div className="bg-[#1e1e1e] text-white p-3 rounded-xl border border-yellow-500 max-w-xs">
                <div className="flex items-center space-x-4">
                    <div class="avatar">
                        <div class="w-12">
                            <img className='rounded-full' src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Abhishek Kullu</h3>
                        <div className="text-yellow-400 text-md">
                            ★★★★★
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-[10px] text-gray-300">
                    Found my dream job within a week! The application process was smooth.
                </p>
            </div>
            { /* 2nd person */}
            <div className="bg-[#1e1e1e] text-white p-3 rounded-xl border border-yellow-500 max-w-xs">
                <div className="flex items-center space-x-4">
                    <div class="avatar">
                        <div class="w-12">
                            <img className='rounded-full' src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Shivam Patel</h3>
                        <div className="text-yellow-400 text-md">
                            ★★★★★
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-[10px] text-gray-300">
                This job portal made job search easy and quick. Recommended to all job seekers!
                </p>
            </div>

            { /* 3rd person */}
            <div className="bg-[#1e1e1e] text-white p-3 rounded-xl border border-yellow-500 max-w-xs">
                <div className="flex items-center space-x-4">
                    <div class="avatar">
                        <div class="w-12">
                            <img className='rounded-full' src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Swapnil Pandey</h3>
                        <div className="text-yellow-400 text-md">
                            ★★★★<span className='text-slate-300'>★</span>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-[10px] text-gray-300">
                I secured a job offer within days of applying. Exceptional user experience and support.
                </p>
            </div>

            { /* 4th person */}
            <div className="bg-[#1e1e1e] text-white p-3 rounded-xl border border-yellow-500 max-w-xs">
                <div className="flex items-center space-x-4">
                    <div class="avatar">
                        <div class="w-12">
                            <img className='rounded-full' src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Pavan Barnana</h3>
                        <div className="text-yellow-400 text-md">
                        ★★★★<span className='text-slate-300'>★</span>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-[10px] text-gray-300">
                Highly efficient job portal with excellent resources. Helped me land a great position.
                </p>
            </div>
        </div>
    );
};

export default User;