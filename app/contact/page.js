import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ContactForm from "../components/contact-form";
import ContactBackground from "../../public/images/group-4530.png";

export default function Contact() {
    return (
        <div className="relative h-screen w-screen">
            <Header color="cream" />
            <div className=" bg-[#EFEEE8] lg:bg-[#544F3D] bg-opacity-70 lg:bg-opacity-60">
                <Image
                    src={ContactBackground}
                    fill
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="-z-10"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="max-w-7xl h-[100dvh] mx-auto grid grid-cols-4 py-32 px-8 text-black lg:text-[#EFEEE8]">
                    <h2 className="text-white font-ritma uppercase text-2xl mb-12 hidden lg:block">
                        Contact
                    </h2>
                    <div className="col-span-4 lg:col-span-3">
                        <ContactForm />
                    </div>
                </div>
                <div className="relative text-white">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
