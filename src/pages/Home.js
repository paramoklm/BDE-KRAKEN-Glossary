import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Home/Introduction';
import Slideshow from '../components/Home/Slideshow';
const Home = () => {
    return (
        <div className='accueil h-screen w-screen bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800'>
            <Header />
            <Slideshow/>
            <Introduction />
        </div>
    );
};

export default Home;