import React from 'react';

const MemberNavBar = ({props}) => {

    const scrollToBureau = () => {
        props.bureauRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
    const scrollToRespo = () => {
        props.respoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
    };
    const scrollToStaff = () => {
        props.staffRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div className='membernavbar rounded bg-gradient-to-r from-purple-800 via-fuchsia-700 to-orange-800'>
            <nav>
                <ol>
                    <li className='font-bold' onClick={scrollToBureau}>Bureau</li>
                    <li className='font-bold' onClick={scrollToRespo}>Respo</li>
                    <li className='font-bold' onClick={scrollToStaff}>Staff</li>
                </ol>
            </nav>
        </div>
    );
};

export default MemberNavBar;