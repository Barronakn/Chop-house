import React from "react";
import couple from "/resources/img/video.jpg";
import SectionNameTwo from "../SectionNameTwo";
import SectionLastName from "../SectionLastName";
import SectionNameOne from "../SectionNameOne";

const Contact = () => {
    return (
        <section id="contact" className="mx-10 md:mx-20 xl:mx-32 pb-28">
            <div className="flex flex-col gap-1 justify-center items-center">
                <SectionNameTwo name="Contact Us" />
                <SectionLastName lastname="Contact For Any Query" />
            </div>
            <div className="flex flex-col md:flex-row items-center md:gap-0 gap-5 justify-between py-10">
                <div>
                    <SectionNameOne name="Booking" />
                    <p className="text-sm text-gray-500">book@example.com</p>
                </div>
                <div>
                    <SectionNameOne name="General" />
                    <p className="text-sm text-gray-500">info@example.com</p>
                </div>
                <div>
                    <SectionNameOne name="Technical" />
                    <p className="text-sm text-gray-500">tech@example.com</p>
                </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-10">
                <div className="xl:w-1/2 max-w-5xl mx-auto">
                    <img
                        src={couple}
                        alt="Image d'un beau couple dans notre restaurant"
                    />
                </div>
                <form className="flex flex-col gap-4 xl:w-1/2 w-full">
                    <div className="flex flex-row gap-2">
                        <input className="w-1/2 border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 h-14" type="text" name="name" placeholder="Your Name" />
                        <input className="w-1/2 border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 h-14" type="email" name="email" placeholder="Your Email" />
                    </div>
                    <input className="border-gray-300 w-full focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 rounded-sm text-gray-500 h-14" type="text" name="subject" placeholder="Subject" />
                    <textarea className="border-gray-300 rounded-sm text-gray-500 focus:border-orange-400 focus:border-ouset focus:border-4 focus:outline-none focus:ring-orange-400 focus:border-opacity-30 w-full" name="message" placeholder="Message" cols="30" rows="6"></textarea>
                    <input className='cursor-pointer bg-orange-550 hover:bg-orange-500 py-4 px-16 uppercase rounded-sm text-white' type="submit" value="Send message" />
                </form>
            </div>
        </section>
    );
};

export default Contact;
