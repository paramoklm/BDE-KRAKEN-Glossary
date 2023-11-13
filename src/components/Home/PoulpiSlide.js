import React from 'react';

const PoulpiSlide = ({ poulpiName }) => {
    return (
        <div className='h-full w-1/6 nine:w-20 flex items-center justify-center float-left'>
            <img className='w-full h-20 float-left' src={require(`./../../assets/img/${poulpiName}.png`)} alt={poulpiName} />
        </div>
    );
};

export default PoulpiSlide;