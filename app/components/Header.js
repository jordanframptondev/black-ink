"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import "@/styles/header.css";
import {useState} from "react";

export function Header({color}) {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        const newMenuState = !showMenu;
        setShowMenu(newMenuState);
        if (newMenuState) {
            document.getElementById("menu-background").classList.remove("reverse");
            document.getElementById("menu-background").classList.add("animate");
            document.getElementById("menu").classList.remove("hide");
            document.getElementById("menu").classList.add("show");
        } else {
            document.getElementById("menu-background").classList.remove("animate");
            document.getElementById("menu-background").classList.add("reverse");
            document.getElementById("menu").classList.remove("show");
            document.getElementById("menu").classList.add("hide");
        }
    };

    return (
        <>
            <div className={"sticky top-0 z-10"}>
                <div className={"absolute flex justify-center w-full py-5"}>
                    <p className={`ml-auto ${color === 'black' ? 'text-black' : 'text-[#EFEEE8]'}`}>Black
                        Ink</p>
                    <Image
                        id="logo"
                        src={`${color === 'black' || showMenu ? '/images/black-ink-logo-black.png' : '/images/black-ink-logo-cream.png'}`}
                        alt="Black Ink Logo"
                        width={50}
                        height={50}
                        priority={true}
                        className={`h-[21px] w-fit ml-auto mr-5 cursor-pointer z-20`}
                        onClick={handleMenuClick}
                    />
                </div>
                <div id="menu-background" className={`circle`}
                     onClick={handleMenuClick}></div>
                <div id="menu"
                     className={`z-20 menu mt-10 ml-10 w-1/3 text-[36px] font-ritma`}
                >
                    <p className={"border-t border-t-black py-6 cursor-pointer"}>Home</p>
                    <p className={"border-t border-t-black py-6 cursor-pointer"}>About</p>
                    <p className={"border-t border-t-black py-6 cursor-pointer"}>Services</p>
                    <p className={"border-t border-t-black py-6 cursor-pointer"}>Portfolio</p>
                    <p className={"border-y border-y-black py-6 cursor-pointer"}>Contact</p>
                </div>
            </div>
        </>
    );
}

Header.propTypes = {
    color: PropTypes.oneOf(['black', 'cream']).isRequired,
};
