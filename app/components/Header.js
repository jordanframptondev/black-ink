"use client";

import "@/styles/header.css";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function Header({color}) {
    const [windowWidth, setWindowWidth] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [inverseMenuIcon, setInverseMenuIcon] = useState(false);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

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
            {threshold: [0.5]}
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

    const getBackgroundColorUnderHeader = () => {
        const elementUnderHeader = document.elementFromPoint(window.innerWidth / 100, 60);
        return window.getComputedStyle(elementUnderHeader).backgroundColor;
    };

    useEffect(() => {
        const updateTextColor = () => {
            const header = document.getElementById('black-ink-header-text');
            const bgColor = getBackgroundColorUnderHeader();
            const textColor = window.getComputedStyle(header).color;
            if (bgColor === textColor) {
                header.classList.add('invert-text');
                setInverseMenuIcon(true);
            } else {
                header.classList.remove('invert-text');
                setInverseMenuIcon(false);
            }
        };

        updateTextColor();
        window.addEventListener('scroll', updateTextColor);
        window.addEventListener('resize', updateTextColor);

        return () => {
            window.removeEventListener('scroll', updateTextColor);
            window.removeEventListener('resize', updateTextColor);
        };
    }, []);

    const handleMenuClick = () => {
        const menuState = !showMenu;
        setShowMenu(menuState);
        if (menuState) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            
            document.getElementById("menu-background").classList.remove("reverse");
            document.getElementById("menu-background").classList.add("animate");
            document.getElementById("menu").classList.remove("hide");
            document.getElementById("logo").classList.add("show");
            document.getElementById("menu").classList.add("show");
        } else {
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            
            document.getElementById("menu-background").classList.remove("animate");
            document.getElementById("menu-background").classList.add("reverse");
            document.getElementById("logo").classList.remove("show");
            document.getElementById("menu").classList.remove("show");
            document.getElementById("menu").classList.add("hide");
        }
    };

    return (
        <>
            <header
                className={`sticky top-0 z-[99] ${isFooterVisible ? 'opacity-0' : 'opacity-100'} transition-all duration-1000 ease-in-out select-none text-black`}>
                <div className={"absolute top-[30px] flex w-full z-[100]"}>
                    <Link href={"/"} id="black-ink-header-text"
                          className={`${(color === 'black' && !showMenu) || (showMenu && windowWidth < 768) ? 'text-black' : 'text-[#EFEEE8]'}
                          ${showMenu && windowWidth > 768 ? 'hidden' : 'absolute'}
                    absolute text-lg md:text-2xl font-ritma left-[40px] md:left-[50%] md:-translate-x-1/2 transition-all duration-500 ease-in`}>
                        BLACK INK
                    </Link>
                    <Image
                        id="logo"
                        src={`${color === 'black' || showMenu || inverseMenuIcon ? '/images/black-ink-logo-black.png' : '/images/black-ink-logo-cream.png'}`}
                        alt="Black Ink Logo"
                        width={50}
                        height={50}
                        priority={true}
                        className={`absolute top-[5px] md:top-[8px] right-[40px] h-[18px] md:h-[21px] w-fit`}
                        onClick={handleMenuClick}
                    />
                </div>
                <div id="menu-background" className={`circle`} onClick={handleMenuClick}/>
                <div id="menu"
                     className={`menu z-[99] flex w-dvw h-screen text-3xl md:text-4xl font-ritma`}
                     onClick={handleMenuClick}
                >
                    <div
                        className={"flex z-[99] flex-col mt-32 md:mt-16 pl-10 pr-10 md:pl-10 md:pr-0 w-screen min-h-fit md:w-[500px] transition-all duration-1000 ease-in"}>
                        <Link href={"/"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">HOME</span>
                        </Link>
                        <Link href={"/contact"} className={"nav-link border-y border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">CONTACT</span>
                        </Link>
                        <Link href={"/about"} className={"nav-link border-t border-t-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">ABOUT</span>
                        </Link>
                        <Link href={"/resources"} className={"nav-link border-y border-y-black py-6 cursor-pointer"}>
                            <span className="arrow">→</span> <span className="link-text">RESOURCES</span>
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
