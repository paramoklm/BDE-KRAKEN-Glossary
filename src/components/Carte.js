import React from 'react';

const Carte = (membre) => {
    return (
        <li className='carte'>
            <img src="https://flagcdn.com/is.svg" alt="Islande" />
            <div className='infos'>
                <h2>{membre.carte.login}</h2>
                <h4>{membre.carte.role}</h4>
                <h4>{membre.carte.promo}</h4>
            </div>
        </li>
    );
};

export default Carte;