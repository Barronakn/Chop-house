import React, { useEffect, useState } from "react";
import Button from "../Button";
import aboutImg1 from "/resources/img/about-1.jpg";
import aboutImg2 from "/resources/img/about-2.jpg";
import aboutImg3 from "/resources/img/about-3.jpg";
import aboutImg4 from "/resources/img/about-4.jpg";
import SectionNameOne from "../SectionNameOne";
import Members from "./Members";
import SectionNameTwo from "../SectionNameTwo";
import SectionLastName from "../SectionLastName";

const About = () => {
    const [counterStart, setCounterStart] = useState(false);

    useEffect(() => {
        let values = document.querySelectorAll(".num");
        let interval = 3000;
        let count = document.querySelector(".count");

        const handleScroll = () => {
            values.forEach((value) => {
                let startValue = 0;
                let endValue = parseInt(value.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);

                let topY = window.scrollY;
                let offsetY = count.offsetTop - 500;
                let height = count.offsetHeight;

                if (
                    !counterStart &&
                    topY >= offsetY &&
                    topY <= offsetY + height
                ) {
                    let counter = setInterval(() => {
                        startValue += 1;
                        value.textContent = startValue;

                        if (startValue === endValue) {
                            clearInterval(counter);
                        }
                    }, duration);

                    setCounterStart(true);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [counterStart]);

    return (
        <section id="about" className="pb-28 mx-10 md:mx-20 xl:mx-32">
            <div className="flex xl:flex-row flex-col items-center gap-16">
                <div className="grid grid-cols-2 gap-5 xl:w-1/2 w-full">
                    <div>
                        <img
                            src={aboutImg1}
                            alt="Image des tables vip du restaurant"
                        />
                    </div>
                    <div className="w-9/12 self-end">
                        <img
                            src={aboutImg2}
                            alt="Image des tables du restaurant"
                        />
                    </div>
                    <div className="w-9/12 justify-self-end">
                        <img
                            src={aboutImg3}
                            alt="Image de la nourriture de l'entrée"
                        />
                    </div>
                    <div>
                        <img
                            src={aboutImg4}
                            alt="Image de la nourriture du repas du jour"
                        />
                    </div>
                </div>
                <div className="xl:w-1/2 w-full">
                    <SectionNameOne name="About Us" />
                    <SectionLastName lastname="Welcome to Chop House" />
                    <div className="flex flex-col gap-5 text-gray-500 py-5">
                        <p>
                            Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit. Aliqu diam amet diam et eos erat ipsum et
                            lorem et sit, sed stet lorem sit.
                        </p>
                        <p>
                            Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit. Aliqu diam amet diam et eos. Clita erat
                            ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo magna dolore erat amet
                        </p>
                    </div>
                    <div className="count flex flex-col md:flex-row xl:gap-0 gap-10 xl:justify-between py-5 justify-center">
                        <div className="border-l-orange-550 md:border-l-4 pl-4 flex items-center flex-row gap-4">
                            <span className="num text-orange-550 text-4xl xl:text-6xl font-bold" data-val="15">
                                0
                            </span>
                            <div>
                                <div>
                                    <p className="text-gray-600">Years of</p>
                                    <span className="text-black font-bold uppercase">
                                        Exprience
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border-l-orange-550 md:border-l-4 pl-4 flex items-center flex-row gap-4">
                            <span className="num text-orange-550 text-4xl xl:text-6xl font-bold" data-val="50">
                                0
                            </span>
                            <div>
                                <div>
                                    <p className="text-gray-600">Popular</p>
                                    <span className="text-black font-bold uppercase">
                                        Masters Chefs
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-7 text-center">
                        <Button link="#" content="Read More" />
                    </div>
                </div>
            </div>
            <div className="pt-28">
                <div className="flex flex-col items-center">
                    <SectionNameTwo name="Team Members" />
                    <SectionLastName lastname="Our Master Chefs" />
                </div>
                <Members />
            </div>
        </section>
    );
};

export default About;
