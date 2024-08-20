import Head from '@/Components/Head';
import SectionHead from '@/Components/SectionHead';
import Book from '@/Components/Sections/Book';
import Footer from '@/Components/Sections/Footer';
import React from 'react';

const Booking = () => {
    return (
        <div>
        	<Head
                title="Chop House - Booking"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <SectionHead sectionName="Booking" />
            <Book />
            <Footer />
        </div>
    );
};

export default Booking;
