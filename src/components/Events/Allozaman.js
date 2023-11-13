import React from 'react';

const Allozaman = () => {
    return (
        <div className='border-double border-8 border-orange-500 rounded-lg bg-black bg-opacity-70 w-5/6 mx-auto my-3'>
                <div className='flex justify-center'>
                    <ul className='relative inline-grid grid-rows-1 flex justify-center gap-4'>
                        <img className='rounded' src={require('./../../assets/img/allozaman.png')} alt="allozaman" />
                    </ul>
                </div>
        </div>
    );
};

export default Allozaman;