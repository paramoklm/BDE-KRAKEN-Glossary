import React from 'react';
import Header from '../components/Header';
import Trombinoscope from '../components/Membres/Trombinoscope';

const Membres = () => {
    return (
        <div className='membres' style={
            {backgroundImage: `url(./wood-background.jpg)`}
        }>
            <Header />
            <Trombinoscope />
        </div>
    );
};

export default Membres;