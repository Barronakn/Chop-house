import React from 'react';

const Button = ({content,link}) => {
    return (
        <a href={link} className='bg-orange-550 hover:bg-orange-500 py-4 px-4 md:px-16 uppercase rounded-sm text-white'>{content}</a>
    );
};

export default Button;
