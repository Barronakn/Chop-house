import React from 'react';
import SectionNameTwo from '../SectionNameTwo';
import SectionLastName from '../SectionLastName';
import Card from '../Card';

const Service = () => {
    return (
        <section id='services' className='flex flex-col items-center gap-5 mx-10 md:mx-20 xl:mx-32 py-28'>
            <div className='flex flex-col items-center gap-5'>
            <SectionNameTwo name="Our services" />
            <SectionLastName lastname="Explore Our Services" />
            </div>
            <div className='flex flex-col xl:flex-row gap-5'>
            <Card title="Master Chefs" parag="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
            <Card title="Quality Food" parag="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
            <Card title="Online Order" parag="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
            <Card title="24/7 Service" parag="Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" />
            </div>
        </section>
    );
};

export default Service;
