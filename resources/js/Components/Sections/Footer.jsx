import { Link } from "@inertiajs/react";
import React from "react";
import SectionNameOne from "../SectionNameOne";

const Footer = () => {
    return (
        <footer className="bg-gray-900 px-10 sm:px-20 xl:px-32 text-white">
            <div className="flex xl:flex-row flex-col xl:gap-0 gap-6 items-start justify-between py-28">
                <div>
                    <SectionNameOne name="Compagny" />
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link className="text-sm hover:text-base" href="#">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm hover:text-base" href="#">
                                Reservation
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm hover:text-base" href="#">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm hover:text-base" href="#">
                                Terms & Condition
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <SectionNameOne name="Contact" />
                    <div className="flex flex-col gap-2">
                        <p>123 Street, New York, USA</p>
                        <a href="tel:+012 345 67890">+012 345 67890</a>
                        <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                </div>
                <div>
                    <SectionNameOne name="Opening" />
                    <div className="flex flex-col gap-2">
                        <div>
                            <h6>Sunday</h6>
                            <p>10AM - 08PM</p>
                        </div>
                        <div>
                            <h6>Sunday</h6>
                            <p>10AM - 08PM</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 xl:w-auto w-full">
                    <SectionNameOne name="Newsletter" />
                    <p>
                        Dolor amet sit justo amet elitr clita ipsum elitr est.
                    </p>
                        <form className="flex flex-row justify-between border border-orange-400 bg-white p-2">
                                <input
                                    className="h-10 border-none bg-transparent text-gray-500 w-full border-0 focus:border-none focus:outline-none focus:ring-white"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your email"
                                />
                                <input
                                    className="bg-orange-550 px-3 hover:cursor-pointer hover:bg-orange-500 uppercase font-bold"
                                    type="submit"
                                    value="Sign Up"
                                />
                        </form>
                </div>
            </div>
            <hr />
            <div className="flex xl:flex-row flex-col xl:gap-0 gap-3 items-center justify-between py-4">
                <p className="md:text-base text-sm text-center">
                    © Chop House, All Right Reserved. Create By Jean-Barron
                    ALOKPON
                </p>
                <ul className="flex flex-row gap-6">
                    <li>
                        <Link className="hover:underline" href="#">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="#">
                            Cookies
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="#">
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="#">
                            FQAs
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
