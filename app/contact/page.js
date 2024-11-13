import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ContactForm from "../components/contact-form";
import ContactBackground from "../../public/images/group-4530.png";

export default function Contact() {
    return (
        <div className="relative h-screen w-screen">
            <Header color="cream" />
            <div className="absolute inset-0 bg-[#EFEEE8] lg:bg-[#544F3D] -z-50">
                <Image
                    src={ContactBackground}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="w-full h-full object-cover opacity-30 lg:opacity-100"
                />
            </div>
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
    );
}
