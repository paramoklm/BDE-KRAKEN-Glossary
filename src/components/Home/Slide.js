import React from 'react';
import PoulpiSlide from './PoulpiSlide';

const Slide = ({index, backgroundColor, poulpiName, banniere}) => {
    return (
        <div className='slide h-full w-full' key={index} style={{ backgroundColor }}>
            <div className='h-full w-full'>
                <PoulpiSlide poulpiName={poulpiName} />
                <div className='h-full w-5/6 flex items-center justify-center'>
                    <img className='h-full w-3/4' src={require(`./../../assets/img/${banniere}.png`)} alt="banniere" />
                </div>
            </div>
        </div>
    );
};

export default Slide;