import React from 'react';

const TitleBar = ({props}) => {
    return (
        <h1 className='titlebar font-bold sm:text-5xl text-4xl'>
            {props.title}
        </h1>
    );
};

export default TitleBar;