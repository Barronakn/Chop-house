import React from 'react';
import Head from '@/Components/Head';
import Header from '@/Components/Sections/Header';
import About from '@/Components/Sections/About';
import Contact from '@/Components/Sections/Contact';
import Footer from '@/Components/Sections/Footer';
import Testimonials from '@/Components/Sections/Testimonials';
import Service from '@/Components/Sections/Service';
import Menu from '@/Components/Sections/Menu';

const Welcome = ({menus}) => {
    return (
        <div>
        	<Head
                title="Chop House"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <Header />
            <Service />
            <About />
            <Menu menus={menus} />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Welcome;
