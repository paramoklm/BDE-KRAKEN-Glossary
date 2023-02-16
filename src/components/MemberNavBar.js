import React from 'react';

const MemberNavBar = ({props}) => {

    const scrollToPresident = () => {
        props.presidentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'});
    };
    const scrollToBureau = () => {
        props.bureauRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'});
    };
    const scrollToRespo = () => {
        props.respoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center'});
    };
    const scrollToStaff = () => {
        props.staffRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
    return (
        <div className='membernavbar rounded bg-gradient-to-r from-cyan-500 to-blue-500'>
            <nav>
                <ol>
                    <li className='font-bold' onClick={scrollToPresident}>President</li>
                    <li className='font-bold' onClick={scrollToBureau}>Bureau</li>
                    <li className='font-bold' onClick={scrollToRespo}>Respo</li>
                    <li className='font-bold' onClick={scrollToStaff}>Staff</li>
                </ol>
            </nav>
        </div>
    );
};

export default MemberNavBar;