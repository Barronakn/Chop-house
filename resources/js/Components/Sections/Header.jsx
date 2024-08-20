import React from "react";
import Nav from "../Nav";
import Logo from "../Logo";
import headerimg from "/resources/img/hero.png";
import Button from "../Button";
import { useState } from "react";
import menu from "../../../img/icon/menu_icon.png";
import reset from "../../../img/icon/menu-reset.svg";


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <section id="home" className="bg-header bg-black bg-opacity-80">
            <div className="flex flex-row items-center justify-between px-10 md:px-20 py-5 fixed left-0 w-full bg-black opacity-100 z-10">
                <Logo />
                <div>
                    {open ? (
                        <div
                            onClick={() => setOpen(!open)}
                            className="w-10 h-10 sm:w-full p-2 rounded-100 cursor-pointer block xl:hidden"
                        >
                            <img
                                loading="lazy"
                                className="w-10 h-10 pointer-events-none"
                                src={reset}
                                alt="Close the menu"
                            />
                        </div>
                    ) : (
                        <div
                            onClick={() => setOpen(!open)}
                            className="w-10 h-10 sm:w-16 p-2 rounded-100 cursor-pointer block xl:hidden"
                        >
                            <img
                                loading="lazy"
                                className="pointer-events-none"
                                src={menu}
                                alt="Open the menu"
                            />
                        </div>
                    )}
                </div>
                <Nav open={open} />
            </div>

            <header className="bg-black bg-opacity-90 flex flex-col md:flex-row px-10 md:px-20 xl:px-32 gap-20 items-center py-32 text-white z-0">
                <div className="w-full md:w-1/2 flex flex-col gap-10">
                    <div>
                        <h1 className="sm:text-2xl md:text-4xl xl:text-6xl font-bold">
                            Enjoy Our Delicious Meal
                        </h1>
                    </div>
                    <div>
                        <p>
                            Tempor erat elitr rebum at clita. Diam dolor diam
                            ipsum sit. Aliqu diam amet diam et eos. Clita erat
                            ipsum et lorem et sit, sed stet lorem sit clita duo
                            justo magna dolore erat amet
                        </p>
                    </div>
                    <div>
                    <Button link="/booking" content="Book a table" />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="rotate-animate" src={headerimg} alt="Image d'un plat" />
                </div>
            </header>
        </section>
    );
};

export default Header;
