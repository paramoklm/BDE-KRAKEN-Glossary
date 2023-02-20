import data from './../data/data.json'
import React from 'react';
import Group from './Group';
import { useRef } from 'react';
import MemberNavBar from './MemberNavBar';


const Trombinoscope = () => {
    const presidentRef = useRef(null);
    const bureauRef = useRef(null);
    const respoRef = useRef(null);
    const staffRef = useRef(null);


    return (
        <div>
            <MemberNavBar props={{presidentRef: presidentRef, bureauRef: bureauRef, respoRef: respoRef, staffRef: staffRef}}/>
            <div className='collection' style={{top: '40px'}}>
                <div className='collection' style={
                    { height: '30vh' }}>

                    <img src="./pirate-map.png" alt="pirate-map" style={
                        { height: '30vh', width: '45%' }
                    } />
                    <h3 className='lobster font-bold text-sm four:text-xl five:text-2xl six:text-3xl seven:text-4xl nine:text-5xl twelve:text-6xl fourteen:text-8xl' style={
                        { zIndex: 1 }
                    }>L'EQUIPAGE</h3>
                </div>
                <div ref={bureauRef}><Group props={{ data: data, status: "bureau", background: "./crash-background-2.jpega", title: "BUREAU" }} id="bureau" /></div>
                <div ref={respoRef}><Group props={{ data: data, status: "respo", background: "./crash-background-3.jpega", title: "RESPO" }} id="respo" /></div>
                <div ref={staffRef}><Group props={{ data: data, status: "staff", background: "./crash-background-4.jpega", title: "STAFF" }} id="staff" /></div>

            </div>
        </div>
    );
};

export default Trombinoscope;