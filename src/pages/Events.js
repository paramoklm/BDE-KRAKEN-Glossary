import React from 'react';
import Header from '../components/Header';
import Pokemon from '../components/Events/Pokemon';
import Allozaman from '../components/Events/Allozaman';
import Minekrak from '../components/Events/Minekrak';
import Question from '../components/Events/Question';

const Event = () => {
    return (
        <div className='fixed bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800 w-full h-full overflow-y-auto'>
            <Header/>
            <Pokemon/>
            <Allozaman/>
            <Minekrak/>
            <Question/>
        </div>
    );
};

export default Event;