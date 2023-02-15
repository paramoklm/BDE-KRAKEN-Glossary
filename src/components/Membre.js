import React from 'react';

const Membre = (membre) => {
    return (
        <li className='membre'>
            <img src={require("./../assets/img/param.dave.jpg")} alt="cri" />
            <div className='infos'>
                <h2>{membre.membre.login}</h2>
                <h4>{membre.membre.role}</h4>
                <h4>{membre.membre.promo}</h4>
            </div>
        </li>
    );
};

export default Membre;