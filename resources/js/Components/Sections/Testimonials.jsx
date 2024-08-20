import SectionNameTwo from "../SectionNameTwo";
import SectionLastName from "../SectionLastName";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Testimonial from "../Testimonial";
import client1 from '/resources/img/testimonial-1.jpg';
import client2 from '/resources/img/testimonial-2.jpg';
import client3 from '/resources/img/testimonial-3.jpg';
import client4 from '/resources/img/testimonial-4.jpg';
import client5 from '/resources/img/testimonial-2.jpg';
import client6 from '/resources/img/testimonial-3.jpg';

const Testimonials = () => {
    return (
        <section id="testimonial" className="mx-32 pb-14">
            <div className="flex flex-col gap-1 justify-center items-center">
                <SectionNameTwo name="Testimonial" />
                <SectionLastName lastname="Our Clients Say!!!" />

                <Swiper
                    className="my-10 mySwiper"
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    <SwiperSlide>
                        <Testimonial avis="J'adore la bouffe de ce restaurant" client={client1} name="Espoire A." profession="Dev. web" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial avis="Un endroit agrééable pour manger de super repas" client={client2} name="Esther T." profession="Jusriste" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial avis="Que dire ! J'adore vos plats" client={client3} name="Franck O." profession="Commerçant" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial avis="Beau décor, agréable pour des réunions" client={client4} name="Néllie M." profession="Styliste" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial avis="Incroyable!  C'est juste le meilleur restaurant ue j'ai visité jusqu'ici" client={client5} name="Ulrich K." profession="Pisciculteur" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial avis="Magnifique endroit, avec servant/servante acceuillant(e)" client={client6} name="Farid A." profession="Agronome" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
