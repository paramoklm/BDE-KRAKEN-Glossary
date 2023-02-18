import React from 'react';

const CartePopUp = ({ value, onClick }) => {
    return (
        <div className='absolute sticky  top-0 left-0 bottom-0 right-0'>
            {
                (value != null) && (
                    <div className='absolute sticky h-screen w-screen flex place-content-center bg-black bg-opacity-70 top-0 right-0 z-5'
                        onClick={() => onClick(null)}>
                        <img className='absolute sticky top-1/4 flex justify-center w-[20rem] h-[32rem]'
                            src={require(`./../../assets/img/cartes/${value}.png`)} alt="carte" />
                    </div>
                )
            }
        </div>
    );
};

export default CartePopUp;