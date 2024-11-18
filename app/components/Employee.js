"use client";

import { FadeIn } from "@/app/components/FadeIn";
import HeadShotBg from "@/public/images/employees/headshots-bg.png";
import "@/styles/employee.css";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Employee({displayText, image, lqip, index}) {

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
                        <div className={'text-[16px] md:text-[20px] font-signifier'}>
                        <PortableText value={displayText} /></div>
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
                        <Image
                            src={image}
                            alt="Cursor Follow"
                            className="absolute w-full h-full pointer-events-none opacity-80"
                            blurDataURL={lqip}
                            priority={true}
                            fill={true}
                        />
                        <Image
                            src={HeadShotBg}
                            alt="Cursor Follow Background"
                            className="absolute w-full h-full pointer-events-none opacity-20"
                            fill={true}
                        />
                    </div>
                )}
            </FadeIn>
        </div>
    );
}
