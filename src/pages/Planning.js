import React from 'react';
import Header from '../components/Header';

const Planning = () => {
    return (
        <div className='fixed bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800 w-full h-full overflow-y-auto'>
            <Header />
            <div className='border-double border-8 border-rose-500 rounded-lg bg-black bg-opacity-70 w-5/6 mx-auto my-3'>
                <div className='flex justify-center mx-5 my-5'>
                    <img className='rounded h-1/2 w-1/2' src={require('./../assets/img/planning-semaine.png')} alt="planning-semaine" />
                </div>
                <div className='flex justify-center'>
                    <ul className='relative inline-grid grid-rows-5 flex justify-center gap-4'>
                        <img className='rounded ' src={require('./../assets/img/lundi-1.png')} alt="planning-jour" />
                        <img className='rounded ' src={require('./../assets/img/lundi-2.png')} alt="planning-jour" />
                        <img className='rounded' src={require('./../assets/img/mardi.png')} alt="planning-jour" />
                        <img className='rounded ' src={require('./../assets/img/mercredi-1.png')} alt="planning-jour" />
                        <img className='rounded ' src={require('./../assets/img/mercredi-2.png')} alt="planning-jour" />
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Planning;