import React from 'react';
import Header from '../components/Header';
import Collection from '../components/Collection';

const Membres = () => {
    return (
        <div className='cartes'>
            <Header />
            <h1>Membres</h1>
            <h2>Tout les membres de Kraken !</h2>
            <Collection />
        </div>
    );
};

export default Membres;