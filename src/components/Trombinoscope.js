import data from './data/data.json'
import React from 'react';
import Group from './Group';
import { Link } from "react-scroll";

const Trombinoscope = () => {
    return (
        <div className='collection'>
            <h3>Trombinoscope</h3>
            <Group props={{ data: data, status: "president", background: "./crash-background.jpeg", title: "PRESIDENT"}} />
            <Group props={{ data: data, status: "bureau", background: "./crash-background-2.jpeg", title: "BUREAU"}} />
            <Group props={{ data: data, status: "respo", background: "./crash-background-3.jpeg", title: "RESPO"}} />
            <Group props={{ data: data, status: "staff", background: "./crash-background-4.jpeg", title: "STAFF"}}/>
        </div>
    );
};

export default Trombinoscope;