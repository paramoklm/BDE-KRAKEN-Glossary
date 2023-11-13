import React from 'react';

const Carte = ({carte, onClick}) => {
    return (
        <div className='relative'>
            <li className='carte'>
                <img className='imga' src={require(`./../../assets/img/cartes/${carte.login}.png`)} alt="pokemon"
                onClick={() => onClick(carte.login)}/>
            </li>
        </div>
    );
};

export default Carte;