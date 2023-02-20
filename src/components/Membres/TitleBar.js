import React from 'react';

const TitleBar = ({props}) => {
    return (
        <h1 className='lobster titlebar font-bold text-6xl'>
            {props.title}
        </h1>
    );
};

export default TitleBar;