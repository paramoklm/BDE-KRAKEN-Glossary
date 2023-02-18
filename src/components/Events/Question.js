import React from 'react';

const Question = () => {
    return (
        <div className='border-8 border-purple-500 rounded-lg bg-black bg-opacity-70 w-5/6 mx-auto my-3'>
                <div className='flex justify-center mx-5 my-5'>
                    <img className='rounded h-1/2 w-1/2' src={require('./../../assets/img/question.png')} alt="question" />
                </div>
        </div>
    );
};

export default Question;