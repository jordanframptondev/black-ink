"use client";

import "@/styles/employee.css";
import React, {useEffect, useState} from "react";
import {FadeIn} from "@/app/components/FadeIn";

export default function Employee({name, title, image, index, children}) {

    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    const handleMouseMove = (e) => {
        setCursorPosition({x: e.clientX - 135, y: e.clientY - 135});
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Set initial window width
        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsHovering(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getBorderClass = () => {
        if (windowWidth >= 1024) {
            return index < 3 ? 'border-y border-y-black' : 'border-b border-b-black';
        } else if (windowWidth >= 768) {
            return index < 2 ? 'border-y border-y-black' : 'border-b border-b-black';
        } else {
            return index < 1 ? 'border-y border-y-black' : 'border-b border-b-black';
        }
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{position: 'relative', display: 'inline-block'}}
        >
            <FadeIn>
                <div key={index}
                     className={`flex items-center image-container py-10 employee-name-div ${getBorderClass()}`}>
                    <div className={'flex items-center employee-name-text'}>
                        <span className="arrow">→</span>
                        <p className={'text-[16px] md:text-[20px] font-signifier'}>{name}</p>
                        {title && (
                            <>
                                <span>&nbsp;&mdash;&nbsp;</span>
                                <p className={'text-[16px] md:text-[20px] font-signifierItalic'}>{title}</p>
                            </>
                        )}
                    </div>
                </div>
                {isHovering && (
                    <div
                        style={{
                            position: 'fixed',
                            left: cursorPosition.x + 10,
                            top: cursorPosition.y + 10,
                            pointerEvents: 'none',
                            width: '255px', // Adjust size as needed
                            height: '250px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 99,
                        }}
                    >
                        <img
                            src={image}
                            alt="Cursor Follow"
                            className="absolute w-full h-full pointer-events-none opacity-80"
                        />
                        <img
                            src={"/images/employees/headshots-bg.png"}
                            alt="Cursor Follow Background"
                            className="absolute w-full h-full pointer-events-none opacity-20"
                        />
                    </div>
                )}
            </FadeIn>
        </div>
    );
}
