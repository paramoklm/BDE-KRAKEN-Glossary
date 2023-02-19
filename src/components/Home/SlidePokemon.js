import React from 'react';
import PoulpiSlide from './PoulpiSlide';

const SlidePokemon = ({ index, backgroundColor }) => {
    return (
        <div className='slide h-full w-full' key={index} style={{ backgroundColor }}>
            <div className='h-full w-full'>
                <PoulpiSlide poulpiName="poulpikachu" />
                <div className='h-full w-5/6 flex items-center justify-center'>
                    <img className='h-full w-3/4' src={require(`./../../assets/img/pokemon-1-1.png`)} alt="banniere" />
                </div>
            </div>
        </div>
    );
};

export default SlidePokemon;