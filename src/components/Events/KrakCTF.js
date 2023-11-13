import React from 'react';

const KrakCTF = () => {
    return (
        <div className='border-double border-8 border-yellow-500 rounded-lg bg-black bg-opacity-70 w-5/6 mx-auto my-3 mt-12'>
                <div className='flex justify-center mx-5 my-5'>
                    <img className='rounded h-1/2 w-1/2' src={require('./../../assets/img/krak-ctf-1.png')} alt="krak-ctf-1" />
                </div>
                <div className='flex justify-center'>
                    <ul className='relative inline-grid grid-rows-1 flex justify-center gap-4'>
                        <img className='rounded ' src={require('./../../assets/img/krak-ctf-2.png')} alt="krak-ctf-2" />
                        <img className='rounded ' src={require('./../../assets/img/krak-ctf-3.png')} alt="krak-ctf-3" />
                        <img className='rounded ' src={require('./../../assets/img/krak-ctf-4.png')} alt="krak-ctf-4" />
                    </ul>
                </div>
        </div>
    );
};

export default KrakCTF;