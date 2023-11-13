import React from 'react';
import Header from '../components/Header';
import Collection from '../components/Cartes/Collection';
import { useState } from 'react';
import CartePopUp from '../components/Cartes/CartePopUp';

const Cartes = () => {
    const [value, setValue] = useState(null);

    const handleClick = (path) => {
        setValue(path);
    }

    return (
        <div className='cartes bg-gradient-to-r from-indigo-800 via-grey-200 to-red-800'>
            <Header />
            <Collection value={value} onClick={handleClick}/>
            <CartePopUp value={value}  onClick={handleClick}/>
        </div>
    );
};

export default Cartes;