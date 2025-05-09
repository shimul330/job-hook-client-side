import React from 'react';
import Hero from '../components/Hero';
import Company from '../components/Company';
import JobCatagory from '../components/JobCatagory';
import HowItWork from '../components/HowItWork';
import User from '../components/User';

const Home = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto mt-10'>
                <Hero></Hero>
            </section>
            <section className='mt-10'>
                <Company></Company>
            </section>
            <main >
                <section className='mt-20'>
                    <JobCatagory></JobCatagory>
                </section>
                <section className='mt-28'>
                    <HowItWork></HowItWork>
                </section >
                <section className='mt-28 w-11/12 mx-auto'>
                    <User></User>
                </section>
            </main>

        </div>
    );
};

export default Home;