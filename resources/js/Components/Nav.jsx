import React, { useState } from "react";
import { useEffect } from "react";

const Nav = ({open}) => {
    const [activeLink, setActiveLink] = useState("home");
    const handleClickLink = (linkname) => {
        setActiveLink(linkname);
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navlink = document.querySelectorAll(".nav-bar ul li a");

        window.onscroll = () => {
            sections.forEach((section) => {
                let top = window.scrollY;
                let offset = section.offsetTop - 150;
                let height = section.offsetHeight;
                let id = section.getAttribute("id");

                if (top >= offset && top < offset + height) {
                    navlink.forEach((link) => {
                        link.classList.remove("active");
                        document
                            .querySelector(".nav-bar ul li a[href*=" + id + "]")
                            .classList.add("active");
                    });
                }
            });
        };
    });

    return (
        <div className={`nav-bar text-white ${
            open ? "block absolute right-0" : "hidden xl:block"
        }`}>
            <ul
                className={`flex flex-col md:text-lg fixed left-0 w-full px-20 xl:px-0 py-14 xl:py-0 top-0 xl:relative xl:flex-row justify-center text-white xl:items-center gap-11 bg-black xl:bg-transparent transition-all xl:transition-none duration-500 ease-in xl:top-0 ${
                    open ? "top-20 sm:top-28" : "top-[-700px]"
                }`}
            >
                <li>
                    <a
                        href="home"
                        className={
                            activeLink === "home"
                                ? "active uppercase text-sm"
                                : "hover:border-b-2 hover:border-orange-550 pb-2 uppercase text-sm"
                        }
                        onClick={() => handleClickLink("home")}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/services"
                        className={
                            activeLink === "services"
                                ? "active"
                                : "hover:border-b-2 hover:border-orange-550 pb-2 uppercase text-sm"
                        }
                        onClick={() => handleClickLink("services")}
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="/about"
                        className={
                            activeLink === "about"
                                ? "active"
                                : "hover:border-b-2 hover:border-orange-550 pb-2 uppercase text-sm"
                        }
                        onClick={() => handleClickLink("about")}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/menu"
                        className={
                            activeLink === "menu"
                                ? "active"
                                : "hover:border-b-2 hover:border-orange-550 pb-2 uppercase text-sm"
                        }
                        onClick={() => handleClickLink("menu")}
                    >
                        Menu
                    </a>
                </li>
                <li>
                    <a
                        href="/testimonial"
                        className={
                            activeLink === "testimonial"
                                ? "active"
                                : "hover:border-b-2 hover:border-orange-550 pb-2 uppercase text-sm"
                        }
                        onClick={() => handleClickLink("testimonial")}
                    >
                        Testimonial
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className={
                            activeLink === "contact"
                                ? "active"
                                : "hover:border-b-2 hover:border-orange-550 pb-2 uppercase text-sm"
                        }
                        onClick={() => handleClickLink("contact")}
                    >
                        Contact
                    </a>
                </li>
                <a
                    href="/booking"
                    className="bg-orange-550 hover:bg-orange-500 py-2 px-4 uppercase rounded-sm text-white"
                >
                    Book a table
                </a>
            </ul>
        </div>
    );
};

export default Nav;
