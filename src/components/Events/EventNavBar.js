import React from 'react';

const EventNavBar = ({props}) => {
    const scrollToPokemon = () => {
        props.pokemonRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
    const scrollToAlloZaman = () => {
        props.alloZamanRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
    const scrollToMinekrak = () => {
        props.minekrakRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToQuestion = () => {
        props.questionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className='membernavbar rounded bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800'>
            <nav>
                <ol>
                    <li className='font-bold text-sm lg:text-lg' onClick={scrollToPokemon}>Pokemon</li>
                    <li className='font-bold text-sm lg:text-lg' onClick={scrollToAlloZaman}>Allo'Zaman</li>
                    <li className='font-bold text-sm lg:text-lg' onClick={scrollToMinekrak}>Minekrak</li>
                    <li className='font-bold text-sm lg:text-lg' onClick={scrollToQuestion}>Question'Krak</li>
                </ol>
            </nav>
        </div>
    );
};

export default EventNavBar;