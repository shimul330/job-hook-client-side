import React from 'react';
import { RiAnchorFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#2D2D2D] text-slate-300 p-10">
                <aside>
                    <div className='flex items-center gap-1 text-[#FFD149]'>
                        <RiAnchorFill className='text-[#FFD149]' size={25} />
                        <h1 className='font-bold text-2xl text-[#FFD149]'>JobHook</h1>
                    </div>
                    <p className='text-slate-300'>
                    Job portal with user profiles, skill updates, <br /> certifications, work experience and admin job <br /> postings.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-[#FFD149] ">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FFD149]">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-[#FFD149]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;