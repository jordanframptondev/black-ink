"use client";

import "@/styles/team.css";
import React, {useEffect, useRef, useState} from 'react';

export function Team() {
    const imageRefs = useRef([]);
    const containerRef = useRef(null);

    const handleMouseMove = (event, index) => {
        if (imageRefs.current[index]) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const relativeX = event.clientX - containerRect.left;
            const relativeY = event.clientY - containerRect.top;

            imageRefs.current[index].style.transform = 'translate(-50%, -50%)';
            imageRefs.current[index].style.left = `${relativeX + 125}px`;
            imageRefs.current[index].style.top = `${relativeY}px`;
        }
    };

    const handleMouseEnter = (index) => {
        imageRefs.current[index].style.opacity = '0.7';
    };

    const handleMouseLeave = (index) => {
        imageRefs.current[index].style.opacity = '0';
    };

    return (
        <div ref={containerRef} className={'bg-[#EFEEE8] text-black w-screen h-screen p-10'}>
            <h2 className={`text-[24px] mb-16 font-ritma`}>OUR TEAM</h2>
            <div className={'grid grid-cols-3 gap-x-4'}>
                {employees.map((employee, index) => (
                    <div
                        key={index}
                        className={`flex items-center image-container cursor-nw-resize py-10 
                        ${index < 3 ? 'border-y border-y-black' : ''}
                        ${index >= 3 ? 'border-b border-b-black' : ''}`}
                        onMouseMove={(event) => handleMouseMove(event, index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <img
                            ref={(el) => (imageRefs.current[index] = el)}
                            src={employee.image}
                            alt={employee.name}
                            className={'w-[200px] rounded-full'}
                        />
                        <p className={'text-[24px] font-signifier'}>{employee.name}</p>
                        <span>&nbsp;&mdash;&nbsp;</span>
                        <p className={'text-[24px] font-signifierItalic'}>{employee.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const employees = [
    {
        name: 'Alice Johnson',
        title: 'Senior Business Consultant',
        image: '/images/Employee Headshots/headshot-01.png'
    },
    {
        name: 'Bob Smith',
        title: 'Strategy Consultant',
        image: '/images/Employee Headshots/headshot-02.png'
    },
    {
        name: 'Carol Williams',
        title: 'Financial Analyst',
        image: '/images/Employee Headshots/headshot-03.png'
    },
    {
        name: 'David Brown',
        title: 'Operations Manager',
        image: '/images/Employee Headshots/headshot-04.png'
    },
    {
        name: 'Eve Davis',
        title: 'Marketing Specialist',
        image: '/images/Employee Headshots/headshot-05.png'
    },
    {
        name: 'Frank Miller',
        title: 'IT Consultant',
        image: '/images/Employee Headshots/headshot-06.png'
    },
    {
        name: 'Grace Wilson',
        title: 'Human Resources Consultant',
        image: '/images/Employee Headshots/headshot-07.png'
    },
    {
        name: 'Henry Moore',
        title: 'Project Manager',
        image: '/images/Employee Headshots/headshot-08.png'
    },
    {
        name: 'Ivy Taylor',
        title: 'Risk Management Consultant',
        image: '/images/Employee Headshots/headshot-09.png'
    },
    {
        name: 'Jack Anderson',
        title: 'Compliance Officer',
        image: '/images/Employee Headshots/headshot-10.png'
    },
    {
        name: 'Karen Thomas',
        title: 'Business Analyst',
        image: '/images/Employee Headshots/headshot-11.png'
    },
    {
        name: 'Larry White',
        title: 'Supply Chain Consultant',
        image: '/images/Employee Headshots/headshot-12.png'
    },
    {
        name: 'Megan Harris',
        title: 'Change Management Consultant',
        image: '/images/Employee Headshots/headshot-13.png'
    },
    {
        name: 'Nathan Clark',
        title: 'Data Analyst',
        image: '/images/Employee Headshots/headshot-14.png'
    }
];
