import React from 'react';

const Pokemon = () => {
    return (
        <div className='border-double border-8 border-yellow-500 rounded-lg bg-black bg-opacity-70 w-5/6 mx-auto my-3 mt-12'>
                <div className='flex justify-center mx-5 my-5'>
                    <img className='rounded h-1/2 w-1/2' src={require('./../../assets/img/pokemon-1.png')} alt="pokemon-1" />
                </div>
                <div className='flex justify-center'>
                    <ul className='relative inline-grid grid-rows-1 flex justify-center gap-4'>
                        <img className='rounded ' src={require('./../../assets/img/pokemon-2.png')} alt="pokemon-2" />
                    </ul>
                </div>
        </div>
    );
};

export default Pokemon;