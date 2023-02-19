import React from 'react';
import PoulpiSlide from './PoulpiSlide';

const SlideMinekrak = ({ index, backgroundColor }) => {
    return (
        <div className='slide relative flex h-full w-full' key={index} style={{ backgroundColor }}>
            <PoulpiSlide poulpiName="poulpiminekrak"/>
            <div className='h-full w-5/6 flex items-center justify-center'>
                <img className='h-full w-3/4' src={require(`./../../assets/img/minekrak-1-1.png`)} alt="banniere" />
            </div>
        </div>
    );
};

export default SlideMinekrak;