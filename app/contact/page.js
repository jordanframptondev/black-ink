import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ContactForm from "../components/contact-form";
import ContactBackground from "../../public/images/group-4530.png";

export default function Contact() {
    return (
        <div className="relative h-screen w-screen bg-[#544F3D] bg-opacity-70">
            <Image
                src={ContactBackground}
                fill
                quality={100}
                placeholder="blur"
                sizes="100vw"
                alt="Black Ink"
                style={{
                    objectFit: "cover",
                }}
            />
            <Header color="cream" />
            <div>
                <div className="max-w-7xl mx-auto grid grid-cols-4 py-20 px-8 text-[#EFEEE8]">
                    <h2 className="text-white font-ritma uppercase text-2xl mb-12">
                        Contact
                    </h2>
                    <div className="col-span-3">
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
