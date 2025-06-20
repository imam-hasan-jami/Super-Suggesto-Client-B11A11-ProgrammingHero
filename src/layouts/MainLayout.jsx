import React from 'react';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;