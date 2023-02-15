import React from 'react';
import Header from '../components/Header';
import Trombinoscope from '../components/Trombinoscope';

const Membres = () => {
    return (
        <div className='membres'>
            <Header />
            <h1>Membres</h1>
            <h2>Tout les membres de Kraken !</h2>
            <Trombinoscope />
        </div>
    );
};

export default Membres;