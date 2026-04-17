// import React from 'react';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;