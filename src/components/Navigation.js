import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/membres" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Membres</li>
                </NavLink>
                <NavLink to="/planning" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Planning</li>
                </NavLink>
                <NavLink to="/events" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Events</li>
                </NavLink>
                <NavLink to="/cartes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Cartes</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;