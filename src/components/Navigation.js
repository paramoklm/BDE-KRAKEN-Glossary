import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='text-xs five:text-lg sigmar font-bold italic'>Accueil</li>
                </NavLink>
                <NavLink to="/membres" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='text-xs five:text-lg sigmar font-bold italic'>Membres</li>
                </NavLink>
                <NavLink to="/planning" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='text-xs five:text-lg sigmar font-bold italic'>Planning</li>
                </NavLink>
                <NavLink to="/events" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='text-xs five:text-lg sigmar font-bold italic'>Events</li>
                </NavLink>
                <NavLink to="/cartes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='text-xs five:text-lg sigmar font-bold italic'>Cartes</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;