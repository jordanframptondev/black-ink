export function Footer() {
    return (
        <footer className={'bg-black w-full h-screen'}>
            <div className={"flex justify-center min-w-screen min-h-screen"}>
                <div className={"flex m-10 w-full"}>
                    <div className={"flex w-1/3 text-[18px] sm:text-[24px] font-ritma"}>
                        <h1>BLACK INK</h1>
                    </div>
                    <div className={"flex flex-col w-2/3"}>
                        <p className={"pb-10 border-b border-white"}> Sign up for strategic insights</p>
                        <div className={"flex mt-auto border-y border-white py-[60px]"}>
                            <div className={"flex flex-col w-1/2"}>
                                <p>Home</p>
                                <p>Contact</p>
                                <p>About</p>
                                <p>Resources</p>
                                <p>Careers</p>
                                <p>Privacy Policy</p>
                            </div>
                            <div className={"w-1/2"}>
                                <p>Email</p>
                                <p>Phone</p>
                                <p>Location</p>
                                <p>Linkedin</p>
                                <p>Instagram</p>
                                <p>Credits</p>
                            </div>
                        </div>
                        <div>
                            <p className={"pt-10"}>© 2021 Black Ink. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
