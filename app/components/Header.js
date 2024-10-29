"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import "@/styles/header.css";
import {useEffect, useState} from "react";
import Link from "next/link";

export function Header({color}) {
    const [showMenu, setShowMenu] = useState(false);

    const [windowWidth, setWindowWidth] = useState(1000);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMenuClick = () => {
        const newMenuState = !showMenu;
        setShowMenu(newMenuState);
        if (newMenuState) {
            document.body.classList.add("no-scroll");
            document.getElementById("menu-background").classList.remove("reverse");
            document.getElementById("menu-background").classList.add("animate");
            document.getElementById("menu").classList.remove("hide");
            document.getElementById("menu").classList.add("show");
        } else {
            document.body.classList.remove("no-scroll");
            document.getElementById("menu-background").classList.remove("animate");
            document.getElementById("menu-background").classList.add("reverse");
            document.getElementById("menu").classList.remove("show");
            document.getElementById("menu").classList.add("hide");
        }
    };

    return (
        <>
            <div className={"sticky top-0 z-10"}>
                <div className={"absolute top-[40px] flex w-full z-20"}>
                    <p className={`${(color === 'black' && !showMenu) || (showMenu && windowWidth < 768) ? 'text-black' : 'text-[#EFEEE8]'} absolute left-[40px] md:left-[50%] md:-translate-x-1/2 transition-all duration-1000 ease-in-out`}>
                        BLACK INK
                    </p>
                    <Image
                        id="logo"
                        src={`${color === 'black' || showMenu ? '/images/black-ink-logo-black.png' : '/images/black-ink-logo-cream.png'}`}
                        alt="Black Ink Logo"
                        width={50}
                        height={50}
                        priority={true}
                        className={`absolute right-[40px] h-[21px] w-fit cursor-pointer`}
                        onClick={handleMenuClick}
                    />
                </div>
                <div id="menu-background" className={`circle`}
                     onClick={handleMenuClick}></div>
                <div id="menu"
                     className={`flex z-20 items-center md:items-start w-screen h-screen menu text-[36px] font-ritma`}
                     onClick={handleMenuClick}
                >
                    <div className={"flex flex-col md:mt-10 pl-10 pr-10 md:pl-10 md:pr-0 w-screen md:w-1/3"}>
                        <Link href={"/"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">Home</span>
                        </Link>
                        <Link href={"/about"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">About</span>
                        </Link>
                        <Link href={"/services"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">Services</span>
                        </Link>
                        <Link href={"/portfolio"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">Portfolio</span>
                        </Link>
                        <Link href={"/contact"} className={"nav-link border-y border-y-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
    color: PropTypes.oneOf(['black', 'cream']).isRequired,
};
