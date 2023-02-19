import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Home/Introduction';
import Slideshow from '../components/Home/Slideshow';
import SlidePokemon from '../components/Home/SlidePokemon';
const Home = () => {
    return (
        <div className='accueil h-screen w-screen bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800'>
            <Header />
            <Slideshow/>
            <Introduction />
            <SlidePokemon index={3} backgroundColor="#0088FE" key={3}/>
        </div>
    );
};

export default Home;