import React from 'react';

const Carte = (membre) => {
    return (
        <li className='carte'>
            <img src={require("./../assets/img/param.dave.jpg")} alt="cri" />
            <div className='infos'>
                <h2>{membre.carte.login}</h2>
                <h4>{membre.carte.role}</h4>
                <h4>{membre.carte.promo}</h4>
            </div>
        </li>
    );
};

export default Carte;