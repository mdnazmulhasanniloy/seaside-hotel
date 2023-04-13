import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../Pages/Shared/Header/Header';

const componentName = () => {
    return (
        <div className=''>
            <Header />
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default componentName;