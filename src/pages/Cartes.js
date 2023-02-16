import React from 'react';
import Header from '../components/Header';
import Collection from '../components/Collection';

const Cartes = () => {
    return (
        <div className='cartes bg-gradient-to-r from-indigo-800 via-grey-200 to-red-800'>
            <Header />
            <h1>Cartes</h1>
            <h2>Les différentes cartes à collecter !</h2>
            <Collection />
        </div>
    );
};

export default Cartes;