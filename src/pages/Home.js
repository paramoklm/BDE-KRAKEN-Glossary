import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Home/Introduction';

const Home = () => {
    return (
        <div className='accueil bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800'>
            <Header />
            <Introduction />
        </div>
    );
};

export default Home;