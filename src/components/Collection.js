import React from 'react';
import Carte from './Carte';
import data from './data/data.json'

const Collection = () => {
    return (
        <div className='collection'>
            <h3>Collection de cartes</h3>
            <ul>
                {data
                .map(
                    (carte, index) => (
                        <Carte key={index} carte={carte}/>
                    )
                )}          
            </ul>
        </div>
    );
};

export default Collection;