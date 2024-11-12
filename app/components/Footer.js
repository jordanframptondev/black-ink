import "@/styles/footer.css";
import {FadeIn} from "@/app/components/FadeIn";

export function Footer() {
    //todo: Implement links to other pages
    return (
        <footer id='footer' className={'bg-black w-full h-screen text-white'}>
            <div className={"flex justify-center min-w-screen min-h-screen"}>
                <div className={"flex flex-col md:flex-row mx-10 mb-10 w-full"}>
                    <div className={"flex w-full md:w-1/3 mt-10 text-[18px] md:text-[24px] font-ritma"}>
                        <FadeIn>
                            <h1>BLACK INK</h1>
                        </FadeIn>
                    </div>
                    <div className={"flex flex-col w-full h-full md:w-2/3"}>
                        <div
                            className={"flex flex-nowrap signup-link w-full py-10 text-[20px] md:text-[30px] lg:text-[36px] font-signifier border-b cursor-pointer border-white transition-all duration-1000 ease-in"}>
                            <div className={"md:mr-auto"}>
                                <span className="arrow">→</span>
                            </div>
                            <div className="w-1/2 min-w-fit pr-[50px] whitespace-nowrap link-text">
                                <FadeIn>
                                <span>Sign up for strategic insights</span>
                                </FadeIn>
                            </div>
                        </div>
                        <div
                            className={"flex flex-col md:flex-row mt-auto text-[18px] md:text-[24px] border-y border-white py-[40px] md:py-[60px] justify-end md:justify-start"}>
                            <div className={"flex flex-col w-full md:w-1/2 items-end md:items-start"}>
                                <p className={"cursor-pointer w-fit font-signifier"}>Home</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Contact</p>
                                <p className={"cursor-pointer w-fit font-signifierItalic"}>About</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Resources</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Careers</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Privacy Policy</p>
                            </div>
                            <div className={"flex flex-col w-full md:w-1/2 items-end md:items-start"}>
                                <p className={"cursor-pointer w-fit font-signifier"}>Email</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Phone</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Location</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Linkedin</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Instagram</p>
                                <p className={"cursor-pointer w-fit font-signifier"}>Credits</p>
                            </div>
                        </div>
                        <div>
                            <p className={"pt-10 text-center md:text-start text-[16px] md:text-[24px] font-signifierItalic"}>©
                                Black Ink Strategy 2024. All
                                rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
