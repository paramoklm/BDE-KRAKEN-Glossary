import data from './data/data.json'
import React from 'react';
import Group from './Group';

const Trombinoscope = () => {
    return (
        <div className='collection'>
            <h3>Trombinoscope</h3>
            <h1>President</h1>
            <Group props={{data: data, status: "president"}}/> 
            <h1>Bureau</h1>
            <Group props={{data: data, status: "bureau"}}/> 
            <h1>Respo</h1>
            <Group props={{data: data, status: "respo"}}/> 
            <h1>Staff</h1>
            <Group props={{data: data, status: "staff"}}/> 
        </div>
    );
};

export default Trombinoscope;