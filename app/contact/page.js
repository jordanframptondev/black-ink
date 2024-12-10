import Image from "next/image";
import ContactBackgroundLight from "../../public/images/contact_form_light_bg.png";
import ContactBackground from "../../public/images/contact_form_dark_bg.png";
import ContactForm from "../components/contact/ContactForm";
import ContactHeader from "../components/ContactHeader";
import { Footer } from "../components/Footer";
import { getContactQuestions } from "../utils/cms-service";

export const metadata = {
    title: 'Contact'
};

export default async function Contact() {
    const contactQuestions = (await getContactQuestions())
        ?.map(q => ({
            question: q.question,
            answers: q.answerOptions,
            order: q.order,
        }))
        .sort((a, b) => a.order - b.order);


    return (
        <div>
            <ContactHeader/>

            <div className="absolute h-screen w-dvw top-0 left-0 bg-[#EFEEE8] md:bg-[#544F3D] z-50">
                <Image
                    src={ContactBackground}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="block md:hidden w-full h-full object-cover opacity-30 md:opacity-100"
                    priority={true}
                />
                <Image
                    src={ContactBackgroundLight}
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    alt="Black Ink"
                    className="hidden md:block h-full object-cover opacity-30 md:opacity-100"
                    priority={true}
                />
            </div>

            <div className="h-screen px-10 pb-10 text-black md:text-[#EFEEE8] relative z-50">
                <div className="flex flex-col md:flex-row pt-[140px]">
                    <div className="hidden md:block md:w-1/3 md:max-w-[400px]">
                        <h2 className="text-white font-ritma text-2xl">CONTACT</h2>
                    </div>
                    {contactQuestions?.length > 0 ? (
                        <div className="w-full md:w-2/3">
                            <div
                                className={`transition-all duration-500 ease-in ${
                                    contactQuestions.length > 0
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                            >
                                {contactQuestions.length > 0 && (
                                    <ContactForm questions={contactQuestions}/>
                                )}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div id="footer" className="relative text-white bg-black h-screen">
                <Footer multiFixedElements={false}/>
            </div>
        </div>
    );
}
