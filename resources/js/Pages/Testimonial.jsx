import Head from '@/Components/Head';
import SectionHead from '@/Components/SectionHead';
import Footer from '@/Components/Sections/Footer';
import Testimonials from '@/Components/Sections/Testimonials';
import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <Head
                title="Chop House - Testimonial"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <SectionHead sectionName='Testimonial' />
            <div className="pt-28"><Testimonials /></div>
            <Footer />
        </div>
    );
};

export default Testimonial;
