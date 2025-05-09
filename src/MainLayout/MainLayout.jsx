import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
// min-h-[calc(100vh-322px)]

const MainLayout = () => {
    return (
        <div className='bg-[#2D2D2D] min-h-[100vh]'>
            <header>
                <Header></Header>
            </header>
                

            <main className='mt-10 min-h[calc(100vh-300px)]'>
            
                <Outlet></Outlet>
            </main>

            <footer className='mt-28'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;