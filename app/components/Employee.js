"use client";

import "@/styles/employee.css";
import React, {useEffect, useState} from "react";
import {FadeIn} from "@/app/components/FadeIn";

export default function Employee({name, title, image, index, children}) {

    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        setCursorPosition({x: e.clientX - 135, y: e.clientY - 135});
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    //when a user scrolls, the image should disappear
    useEffect(() => {
        const handleScroll = () => {
            setIsHovering(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{position: 'relative', display: 'inline-block'}}
        >
            <FadeIn>
                <div key={index}
                     className={`flex items-center image-container py-10 employee-name-div 
                        ${index < 3 ? 'border-y border-y-black' : ''}
                        ${index >= 3 ? 'border-b border-b-black' : ''}`}>
                    <div className={'flex items-center employee-name-text'}>
                        <span className="arrow">→</span>
                        <p className={'text-[20px] font-signifier'}>{name}</p>
                        {title && (
                            <>
                                <span>&nbsp;&mdash;&nbsp;</span>
                                <p className={'text-[20px] font-signifierItalic'}>{title}</p>
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
