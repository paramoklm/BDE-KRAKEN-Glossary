import React from 'react';

const Introduction = () => {
    return (
        <div className='introduction flex justify-center flex-col my-10'>
            <h1 className='text-5xl my-5 font-bold underline text-center'>La liste Kraken se représente !</h1>
            <div className='flex justify-center'>
                <img className='w-1/2 h-1/2' src={require(`./../../assets/img/kraken-logo.png`)} alt="kraken-logo" />
            </div>
        </div>
    );
};

export default Introduction;