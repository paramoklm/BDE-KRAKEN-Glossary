import React from 'react';

const Introduction = () => {
    return (
        <div className='introduction flex justify-center flex-col my-10'>
            <h1 className='lobster text-5xl my-5 font-bold underline text-center'>La liste Kraken se présente de nouveau!</h1>
            <div className='flex justify-center'>
                <img className='w-1/2 h-1/2' src={require(`./../../assets/img/kraken-logo.png`)} alt="kraken-logo" />
            </div>
            <h1 className='lobster text-5xl my-5 font-bold text-center mb-20'>Découvrez le planning de la semaine !</h1>
        </div>
    );
};

export default Introduction;