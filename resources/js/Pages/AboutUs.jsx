import Head from "@/Components/Head";
import SectionHead from "@/Components/SectionHead";
import About from "@/Components/Sections/About";
import Footer from "@/Components/Sections/Footer";
import React from "react";

const AboutUs = () => {
    return (
        <div>
            <Head
                title="Chop House - About"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <SectionHead sectionName='About Us' />
            <div className="pt-28"><About /></div>
            <Footer />
        </div>
    );
};

export default AboutUs;
