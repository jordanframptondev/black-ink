import React from 'react';
import Employee from "@/app/components/Employee";
import {FadeIn} from "@/app/components/FadeIn";

export function Team() {
    return (
        <>
            <div className={'bg-[#EFEEE8] text-black w-screen h-screen p-10 transition-all duration-300 ease-linear'}>
                <FadeIn>
                    <h2 className={`text-[24px] mb-16 font-ritma`}>OUR TEAM</h2>
                </FadeIn>
                <div className={'grid grid-cols-3 gap-x-4 cursor-none'}>
                    {employees.map((employee, index) => (
                        <Employee key={index} name={employee.name} title={employee.title} image={employee.image}
                                  index={index}>
                        </Employee>
                    ))}
                </div>
            </div>
        </>
    );
}

export const employees = [
    {
        name: 'Alex Hanna',
        title: '',
        image: '/images/employees/Alex-Hanna-Black-Ink-Headshots.png'
    },
    {
        name: 'Walter Wilhelm',
        title: '',
        image: '/images/employees/Walter Wilhelm Black Ink Headshots-01.png'
    },
    {
        name: 'Vandra Lochridge',
        title: '',
        image: '/images/employees/Vandra Lochridge Black Ink Headshots-02.png'
    },
    {
        name: 'Shelley Crawford',
        title: '',
        image: '/images/employees/Shelley Crawford Black Ink Headshots-03.png'
    },
    {
        name: 'Niccole Emery',
        title: '',
        image: '/images/employees/Niccole Emery Black Ink Headshots-04.png'
    },
    {
        name: 'Janet Ramirez',
        title: '',
        image: '/images/employees/Janet Ramirez Black Ink Headshots-05.png'
    },
    {
        name: 'Sarah Nagley',
        title: '',
        image: '/images/employees/Sarah Nagley Black Ink Headshots-06.png'
    },
    {
        name: 'Sam Svedlund',
        title: '',
        image: '/images/employees/Sam Svedlund Black Ink Headshots-07.png'
    },
    {
        name: 'Rachel Nee',
        title: '',
        image: '/images/employees/Rachel Nee Black Ink Headshots-08.png'
    },
    {
        name: 'Clark Bailey',
        title: '',
        image: '/images/employees/Clark Bailey Black Ink Headshots-09.png'
    },
    {
        name: 'Shannan Kisiel',
        title: '',
        image: '/images/employees/Shannan Kisiel Black Ink Headshots-10.png'
    },
    {
        name: 'Megan Malveaux',
        title: '',
        image: '/images/employees/Megan Malveaux Black Ink Headshots-11.png'
    },
    {
        name: 'Colin Israel',
        title: '',
        image: '/images/employees/Colin Israel Black Ink Headshots-12.png'
    },
    {
        name: 'Camille Palmer',
        title: '',
        image: '/images/employees/Camille Palmer Black Ink Headshots-13.png'
    },
    {
        name: 'Brandon Gray',
        title: '',
        image: '/images/employees/Brandon Gray Black Ink Headshots-14.png'
    }
];
