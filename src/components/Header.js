import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header shadow-xl w-full top-0 left-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <Navigation />
        </div>
    );
};

export default Header;