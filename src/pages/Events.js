import React from 'react';
import Header from '../components/Header';
import Pokemon from '../components/Events/Pokemon';
import Allozaman from '../components/Events/Allozaman';
import Minekrak from '../components/Events/Minekrak';
import Question from '../components/Events/Question';
import KrakCTF from '../components/Events/KrakCTF';
import EventNavBar from '../components/Events/EventNavBar';
import { useRef } from 'react';

const Event = () => {
    const pokemonRef = useRef(null)
    const alloZamanRef = useRef(null)
    const minekrakRef = useRef(null)
    const questionRef = useRef(null)
    const krakCTFRef = useRef(null)
    return (
        <div className='fixed bg-gradient-to-r from-blue-800 via-fuchsia-700 to-green-700 w-full h-full overflow-y-auto'>
            <Header/>
            <EventNavBar props={{pokemonRef: pokemonRef, alloZamanRef: alloZamanRef, minekrakRef: minekrakRef, questionRef: questionRef, krakCTFRef: krakCTFRef}}/>
            <div ref={pokemonRef}><Pokemon/></div>
            <div ref={alloZamanRef}><Allozaman/></div>
            <div ref={minekrakRef}><Minekrak/></div>
            <div ref={questionRef}><Question/></div>
            <div ref={krakCTFRef}><KrakCTF/></div>

        </div>
    );
};

export default Event;