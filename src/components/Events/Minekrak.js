import React from 'react';

const Minekrak = () => {
    const videoId = 'nxN9zU_DJW8';
    return (
        <div className='border-double border-8 border-green-800 rounded-lg bg-black bg-opacity-70 w-5/6 mx-auto my-3'>
            <div className='flex justify-center mx-5 my-5'>
                <img className='rounded h-1/2 w-1/2' src={require('./../../assets/img/minekrak-1.png')} alt="minekrak-1" />
            </div>
            <div className='flex justify-center'>
                <ul className='relative inline-grid grid-rows-2 flex justify-center gap-4 my-3'>
                    <img className='rounded ' src={require('./../../assets/img/minekrak-2.png')} alt="minekrak-2" />
                    <iframe title="video" className='h-3/4 w-full'
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </ul>
            </div>

        </div>
    );
};

export default Minekrak;