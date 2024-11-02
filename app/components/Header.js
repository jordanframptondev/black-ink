"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import "@/styles/header.css";
import {useEffect, useState} from "react";
import Link from "next/link";

export function Header({color}) {
    const [windowWidth, setWindowWidth] = useState(1000);
    const [showMenu, setShowMenu] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

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

    useEffect(() => {
        const footer = document.getElementById("footer");
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5);
            },
            { threshold: [0.5] }
        );

        if (footer) {
            observer.observe(footer);
        }

        return () => {
            if (footer) {
                observer.unobserve(footer);
            }
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
            <header className={`sticky top-0 z-10 ${isFooterVisible ? 'opacity-0' : 'opacity-100'} transition-all duration-1000 ease-in-out`}>
                <div className={"absolute top-[30px] flex w-full z-[99]"}>
                    <p className={`${(color === 'black' && !showMenu) || (showMenu && windowWidth < 768) ? 'text-black' : 'text-[#EFEEE8]'} 
                    absolute ${showMenu ? 'cursor-alias' : 'cursor-default'} text-[24px] font-ritma left-[40px] md:left-[50%] md:-translate-x-1/2 transition-all duration-1000 ease-in`}>
                        BLACK INK
                    </p>
                    <Image
                        id="logo"
                        src={`${color === 'black' || showMenu ? '/images/black-ink-logo-black.png' : '/images/black-ink-logo-cream.png'}`}
                        alt="Black Ink Logo"
                        width={50}
                        height={50}
                        priority={true}
                        className={`absolute right-[40px] h-[21px] w-fit ${showMenu ? 'cursor-alias' : 'cursor-pointer'}`}
                        onClick={handleMenuClick}
                    />
                </div>
                <div id="menu-background" className={`circle`}
                     onClick={handleMenuClick}></div>
                <div id="menu"
                     className={`flex z-20 min-h-[670px] items-center md:items-start w-screen h-screen menu text-[36px] font-ritma cursor-alias`}
                     onClick={handleMenuClick}
                >
                    <div
                        className={"flex flex-col md:mt-12 pl-10 pr-10 md:pl-10 md:pr-0 w-screen md:w-[500px] transition-all duration-1000 ease-in"}>
                        <Link href={"/"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">HOME</span>
                        </Link>
                        <Link href={"/contact"} className={"nav-link border-y border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">CONTACT</span>
                        </Link>
                        <Link href={"/about"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">ABOUT</span>
                        </Link>
                        <Link href={"/resources"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">RESOURCES</span>
                        </Link>
                        <Link href={"https://www.indeed.com/"} rel="noopener noreferrer" target="_blank"
                              className={"nav-link border-y border-y-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">CAREERS</span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

Header.propTypes = {
    color: PropTypes.oneOf(['black', 'cream']).isRequired,
};
