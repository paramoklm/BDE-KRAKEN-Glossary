import React from 'react';
import Carte from './Carte';
import data from './../data/data_pokemon.json'

const Collection = ({ value, cartePath, onClick }) => {
    return (
        <div className='collection'>
            <h1 className='font-bold text-6xl p-5'>Cartes à collectionner !</h1>
            <ul>
                {data
                .map(
                    (carte, index) => (
                        <Carte key={index} carte={carte} value={value} onClick={onClick} />
                    )
                )}          
            </ul>
        </div>
    );
};

export default Collection;