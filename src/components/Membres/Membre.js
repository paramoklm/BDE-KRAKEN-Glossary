import React from 'react';

const Membre = (membre, className) => {
    return (
        <li className={`membre`} style={{height: '250px', width: '170px'}}>
            <img className='mx-auto' src={require(`./../../assets/img/membres/${membre.membre.login}.jpg`)} alt="cri" />
            <div className='infos'>
                <h2>{membre.membre.login}</h2>
                <h4>{membre.membre.role}</h4>
                <h4>{membre.membre.promo}</h4>
            </div>
        </li>
    );
};

export default Membre;