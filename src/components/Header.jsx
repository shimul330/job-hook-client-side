import React, { use, useState } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { RiAnchorFill } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthLayout/AuthProvider';
import { toast } from 'react-toastify';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Header = () => {
    const { user, logOut } = use(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout successful");
            })
            .catch((error) => {
                alert(error);
            });
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className='bg-[#2D2D2D] shadow-sm py-4'>
            <div className='w-11/12 mx-auto flex justify-between items-center pt-4'>
                <div className='flex items-center gap-1 text-[#FFD149]'>
                    <RiAnchorFill className='text-[#FFD149]' size={25} />
                    <h1 className='font-bold text-xl md:text-2xl text-[#FFD149]'>JobHook</h1>
                </div>

                {/* Desktop Nav */}
                <div className='hidden lg:flex items-center text-white gap-5 text-sm'>
                    <NavLink to='/' className='hover:underline'>Home</NavLink>
                    <NavLink to='/findjob' className={`${!user ? 'pointer-events-none opacity-100' : ''}`}>Find Job</NavLink>
                    <NavLink to='/applyIngjob' className={`${!user ? 'pointer-events-none opacity-100' : ''}`}>Applying Job</NavLink>
                    <NavLink to='/favouritejobs' className={`${!user ? 'pointer-events-none opacity-100' : ''}`}>Favourite Jobs</NavLink>
                </div>

                {/* Mobile Nav Toggle */}
                <div className='lg:hidden text-white' onClick={toggleMenu}>
                    {menuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
                </div>

                {/* Right Side */}
                <div className='hidden lg:flex items-center gap-2'>
                    <div className='flex items-center gap-5'>
                        <h2 className='text-sm text-white'>{user && user.email}</h2>
                        {user && (
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                        )}
                        {user && <IoNotificationsOutline size={20} className='text-white' />}
                    </div>
                    <div>
                        {user ? (
                            <Link><button onClick={handleLogOut} className='btn bg-[#FFD149] text-xs md:text-sm mr-2'>Logout</button></Link>
                        ) : (
                            <div>
                                <Link to='/login'><button className='btn bg-[#FFD149] text-xs md:text-sm mr-2'>Login</button></Link>
                                <Link to='/register'><button className='btn bg-[#FFD149] text-xs md:text-sm'>Register</button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='lg:hidden px-4 text-white flex flex-col gap-3 mt-3 text-sm'>
                    <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                    <NavLink to='/findjob' onClick={toggleMenu} className={`${!user ? 'pointer-events-none opacity-100' : ''}`}>Find Job</NavLink>
                    <NavLink to='/applyIngjob' onClick={toggleMenu} className={`${!user ? 'pointer-events-none opacity-100' : ''}`}>Applying Job</NavLink>
                    <NavLink to='/favouritejobs' onClick={toggleMenu} className={`${!user ? 'pointer-events-none opacity-100' : ''}`}>Favourite Jobs</NavLink>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xs'>{user && user.email}</h2>
                        {user ? (
                            <button onClick={handleLogOut} className='btn bg-[#FFD149] text-xs w-fit'>Logout</button>
                        ) : (
                            <div className='flex gap-2'>
                                <Link to='/login'><button className='btn bg-[#FFD149] text-xs'>Login</button></Link>
                                <Link to='/register'><button className='btn bg-[#FFD149] text-xs'>Register</button></Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
