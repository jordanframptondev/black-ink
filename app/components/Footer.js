"use client";

import { FadeIn } from "@/app/components/FadeIn";
import "@/styles/footer.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Footer({multiFixedElements = true}) {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const currentYear = new Date().getFullYear();
    const [subscribed, setSubscribed] = useState(false);

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
            className={`fixed bottom-0 bg-black w-full h-screen min-h-[668px] text-[#EFEEE8] ${isAtBottom ? '' : '-z-50'}`}>
            <div className={"flex justify-center w-full h-full"}>
                <div className={"flex flex-col md:flex-row mx-10 mb-10 w-full"}>
                    <div className={"flex w-full md:w-1/3 mt-10 text-lg md:text-2xl font-ritma"}>
                        <FadeIn>
                            <Link href={"/"}>BLACK INK</Link>
                        </FadeIn>
                    </div>
                    <div className={"flex flex-col w-full h-full md:w-2/3"}>
                        <form action="/" onSubmit={handleSubmit} className={"flex flex-nowrap signup-link w-full py-10 text-xl md:text-3xl lg:text-4xl font-signifier border-b cursor-pointer border-white"}>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required 
                                className={`p-2 w-0 text-xl font-signifier whitespace-nowrap bg-black placeholder:text-black hover:placeholder:text-white ${
                                    subscribed ? 'hidden' : ''
                                }`} 
                            />
                            <button 
                                type="submit" 
                                className={`md:mr-auto min-w-fit pr-[50px] whitespace-nowrap bg-black ml-4 ${
                                    subscribed ? 'hidden' : ''
                                }`}
                            >
                                &rarr;
                            </button>
                            <div className="w-1/2 min-w-fit pr-[50px] whitespace-nowrap">
                                <FadeIn>
                                    <span className="text-2xl font-signifier">
                                        {subscribed ? "Thanks for subscribing!" : "Sign up for strategic insights"}
                                    </span>
                                </FadeIn>
                            </div>
                        </form>
                        <div
                            className={"flex flex-col md:flex-row mt-auto text-lg md:text-2xl border-y border-white py-[40px] md:py-[60px] justify-end md:justify-start"}>
                            <div className={"flex flex-col w-full items-end md:items-start font-signifier"}>
                                <Link href={"/"} className={"footer-link cursor-pointer w-full "}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">Home</span>
                                </Link>
                                <Link href={"/about"}
                                      className={"footer-link cursor-pointer w-full"}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">About</span>
                                </Link>
                                <Link href={"/resources"}
                                      className={"footer-link cursor-pointer w-full"}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">Resources</span>
                                </Link>
                                <Link href={"/contact"} className={"footer-link cursor-pointer w-full"}>
                                    <span className="footer-arrow">→</span>
                                    <span className="footer-link-text">Contact</span>
                                </Link>
                                <div
                                    className={"credits-container w-full h-7 md:h-8 relative cursor-default"}>
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
                            <p className={"pt-10 text-center md:text-start text-base md:text-2xl font-signifierItalic"}>©
                                Black Ink Strategy {currentYear}. All
                                rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
