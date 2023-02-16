import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';

const Home = () => {
    return (
        <div className='accueil bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-700'>
            <Header />
            <Introduction />
        </div>
    );
};

export default Home;