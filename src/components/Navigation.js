import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='hover:bg-blue-400 px-1 font-bold bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 rounded'>Accueil</li>
                </NavLink>
                <NavLink to="/membres" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='hover:bg-blue-400 px-1 font-bold bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 rounded'>Membres</li>
                </NavLink>
                <NavLink to="/planning" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='hover:bg-blue-400 px-1 font-bold bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 rounded'>Planning</li>
                </NavLink>
                <NavLink to="/events" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='hover:bg-blue-400 px-1 font-bold bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 rounded'>Events</li>
                </NavLink>
                <NavLink to="/cartes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li className='hover:bg-blue-400 px-1 font-bold bg-gradient-to-r from-purple-800 via-fuchsia-700 to-purple-800 rounded'>Cartes</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;