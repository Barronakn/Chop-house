import React from 'react';

const Member = ({picture, desc, name, designation}) => {
    return (
        <div className='flex flex-col px-5 py-8 gap-2 bg-white shadow-2xl items-center'>
            <img className='rounded-full w-52 max-w-full' src={picture} alt={desc} />
            <h4 className='text-lg font-bold'>{name}</h4>
            <p className='text-sm text-gray-500'>{designation}</p>
        </div>
    );
};

export default Member;
