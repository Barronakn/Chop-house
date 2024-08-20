import Head from '@/Components/Head';
import SectionHead from '@/Components/SectionHead';
import Contact from '@/Components/Sections/Contact';
import Footer from '@/Components/Sections/Footer';
import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <Head
                title="Chop House - Contact"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <SectionHead sectionName='Contact Us' />
            <div className="pt-28"><Contact /></div>
            <Footer />
        </div>
    );
};

export default ContactUs;
