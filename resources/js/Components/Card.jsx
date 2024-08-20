import React from 'react';

const Card = ({title,parag}) => {
    return (
        <div className='flex flex-col px-5 py-8 gap-4 transition-text hover-orange-550 bg-white shadow-xl hover-orange-550'>
            <h4 className='text-lg md:text-2xl font-bold'>{title}</h4>
            <p>{parag}</p>
        </div>
    );
};

export default Card;
