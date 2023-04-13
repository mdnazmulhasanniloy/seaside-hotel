import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Banner from './Banner/Banner';
import BookForm from './BookForm/BookForm';
// import HomePageAbout from './HomePageAbout/HomePageAbout';
import HomePageRooms from './HomePageRooms/HomePageRooms';

const Home = () => {
    useTitle('Home')
    return (
        <div className="h-[2000px] banner-homepage">
            <Banner />
            <HomePageRooms />
        </div>
    );
}; 

export default Home;