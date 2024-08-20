import Head from "@/Components/Head";
import SectionHead from "@/Components/SectionHead";
import Footer from "@/Components/Sections/Footer";
import Menu from "@/Components/Sections/Menu";
import React from "react";

const Menus = ({ menus }) => {
    return (
        <div>
            <Head
                title="Chop House - Menu"
                description="Réservez votre table en ligne dans notre restaurant"
                keywords="restaurant, restaurant en ligne, table, réservation"
            />
            <SectionHead sectionName="Menu" />
            <div className="pt-28">
                <Menu menus={menus} />
            </div>
            <Footer />
        </div>
    );
};

export default Menus;
