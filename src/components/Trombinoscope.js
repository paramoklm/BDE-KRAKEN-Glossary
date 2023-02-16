import data from './data/data.json'
import React from 'react';
import Group from './Group';
import { Link } from "react-scroll";

const Trombinoscope = () => {
    return (
        <div className='collection'>
            <div className='collection' style={
                { backgroundImage: `url(./wood-background.jpg)`, height: '30vh'}
                
            }>
                <img src="./pirate-map.png" alt="pirate-map" style={
                    {height: '30vh', width: '45%'}
                }/>
                <h3 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl' style={
                    {zIndex: 1}
                }>L'EQUIPAGE</h3>
            </div>
            <Group props={{ data: data, status: "president", background: "./crash-background.jpeg", title: "PRESIDENT"}} />
            <Group props={{ data: data, status: "bureau", background: "./crash-background-2.jpeg", title: "BUREAU"}} />
            <Group props={{ data: data, status: "respo", background: "./crash-background-3.jpeg", title: "RESPO"}} />
            <Group props={{ data: data, status: "staff", background: "./crash-background-4.jpeg", title: "STAFF"}}/>
        </div>
    );
};

export default Trombinoscope;