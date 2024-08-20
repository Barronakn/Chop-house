import { Link } from '@inertiajs/react';
import React from 'react';
import Nav from './Nav';
import Logo from './Logo';

const SectionHead = ({sectionName}) => {
    return (
        <section className="bg-header bg-black bg-opacity-80">
            <div className="flex flex-row items-center justify-between px-20 py-5 fixed left-0 w-full bg-black opacity-100 z-10">
                <Logo />
                <Nav />
            </div>

            <header className="flex flex-col bg-black bg-opacity-90 px-32 gap-10 items-center pt-32 pb-16 text-white z-0 uppercase">
                <h3 className='text-5xl'>{sectionName}</h3>
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <Link className='text-orange-550 hover:text-orange-700' href='/home'>Home</Link>
                    <span className='text-gray-500'>/</span>
                    <span>{sectionName}</span>
                </div>
            </header>
        </section>
    );
};

export default SectionHead;
