import Head from '@/Components/Head';
import SectionHead from '@/Components/SectionHead';
import Footer from '@/Components/Sections/Footer';
import Service from '@/Components/Sections/Service';
import React from 'react';

const Services = () => {
    return (
        <div>
            <Head
                title="Chop House - Services"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <SectionHead sectionName='Services' />
            <Service />
            <Footer />
        </div>
    );
};

export default Services;
