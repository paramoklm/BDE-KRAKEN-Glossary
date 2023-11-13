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
                <div className='collection flex justify-content' style={
                    { height: '30vh' }}>

                    <img src={require(`./../../assets/img/planche.png`)} alt="planche" className='h-1/2 four:h-1/2 five:h-3/4 w-1/2 four:w-1/2'/>
                    <h3 className='lobster font-bold text-lg three:text-2xl five:text-3xl six:text-4xl seven:text-5xl twelve:text-6xl fourteen:text-8xl' style={
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