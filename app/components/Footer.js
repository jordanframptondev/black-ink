"use client";

import { FadeIn } from "@/app/components/FadeIn";
import "@/styles/footer.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useResources } from "../context/ResourcesContext";

export function Footer({multiFixedElements = true}) {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const currentYear = new Date().getFullYear();
    const [subscribed, setSubscribed] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const {hasResources} = useResources();

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        const checkIfAtBottom = () => {
            if (!multiFixedElements) {
                setIsAtBottom(true);
                return;
            }

            setIsAtBottom(window.scrollY + window.innerHeight >= document.body.scrollHeight);
        };
        checkIfAtBottom();
        window.addEventListener('scroll', checkIfAtBottom);
        return () => window.removeEventListener('scroll', checkIfAtBottom);
    }, [multiFixedElements]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubscribed(true);
    }

    return (
        <footer
            className={`px-10 pb-10 fixed bottom-0 bg-black w-full h-screen min-h-[668px] text-[#EFEEE8] ${isAtBottom ? '' : '-z-50'}`}>
            <div className={"flex justify-center w-full h-full"}>
                <div className={"flex flex-col lg:flex-row w-full"}>
                    <div className={"flex w-full lg:w-1/3 mt-10 text-lg lg:text-2xl font-ritma"}>
                        <FadeIn>
                            <Link href={"/"}>BLACK INK</Link>
                        </FadeIn>
                    </div>
                    <div className={"flex flex-col w-full h-full lg:w-2/3"}>
                        <form action="/" onSubmit={handleSubmit}
                              className={"lg:flex flex-nowrap w-full pt-10 lg:py-10 text-xl lg:text-3xl lg:text-4xl font-signifier lg:border-b lg:border-white"}>
                            {isClient && (
                                <div className="flex signup-link cursor-pointer lg:w-1/2">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        className={`block border-0 py-2 pr-2 w-full lg:w-0 text-xl font-signifier whitespace-nowrap bg-black placeholder:text-black placeholder:text-white lg:hover:placeholder:text-white ${
                                            subscribed ? 'hidden' : ''
                                        }`}
                                    />
                                    <button
                                        type="submit"
                                        className={`lg:mr-auto min-w-fit lg:pr-[50px] whitespace-nowrap bg-black lg:ml-4 ${
                                            subscribed ? 'hidden' : ''
                                        }`}
                                    >
                                        <ArrowRightIcon className="w-6 h-6 text-white"/>
                                    </button>
                                </div>
                            )}
                            <div id="signup-link-text" className="min-w-fit pr-[50px] py-10 lg:py-0 whitespace-nowrap">
                                <FadeIn>
                                    <span className="text-xl lg:text-2xl font-signifier">
                                        {isClient && subscribed ? "Thanks for subscribing!" : "Sign up for strategic insights"}
                                    </span>
                                </FadeIn>
                            </div>
                        </form>
                        <div
                            className={"flex flex-col lg:flex-row mt-auto text-lg lg:text-2xl border-y border-white py-[40px] lg:py-[60px] justify-end lg:justify-start text-right lg:text-left"}>
                            <div className={"flex flex-col w-full items-end lg:items-start font-signifier"}>
                                <Link href={"/"} className={"footer-link cursor-pointer w-full "}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">Home</span>
                                </Link>
                                <Link href={"/about"}
                                      className={"footer-link cursor-pointer w-full"}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">About</span>
                                </Link>
                                {hasResources && (
                                    <Link href={"/resources"}
                                          className={"footer-link cursor-pointer w-full"}>
                                        <span className="footer-arrow">→</span>
                                        <span className="footer-link-text">Resources</span>
                                    </Link>
                                )}
                                <Link href={"/contact"} className={"footer-link cursor-pointer w-full"}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">Contact</span>
                                </Link>
                                <div
                                    className={"credits-container w-full h-7 lg:h-8 relative cursor-default"}>
                                    <div className="credits-text">Credits</div>
                                    <div className="new-credits-text whitespace-nowrap overflow-scroll">
                                        <a href={"https://tenant.studio"} target={"_blank"}
                                           className="inline cursor-pointer text-white bg-transparent p-0 m-0 border-0 hover:underline">Branding
                                            & Design: Tenant</a>&nbsp;|&nbsp;
                                        <a href={"https://moat.studio"} target={"_blank"}
                                           className="inline cursor-pointer text-white bg-transparent p-0 m-0 border-0 hover:underline">Site
                                            Development: Moat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={"pt-10 text-center lg:text-start text-base lg:text-2xl font-signifierItalic"}>©
                                Black Ink Strategy {currentYear}. All
                                rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
