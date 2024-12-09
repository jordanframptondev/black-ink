import "@/styles/full-cta.css";
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '../FadeIn';

export async function FullCta({backgroundImageSrc, overlay, displayText, link}) {
    return (
        <div className="relative flex items-center justify-center bg-black w-screen min-h-screen">
            <Image src={backgroundImageSrc} fill quality={100} placeholder="blur" sizes="100vw" alt="Black Ink" style={{
                objectFit: 'cover',
            }}/>
            <div className={`absolute top-0 right-0 left-0 bottom-0 z-10 opacity-70`}
                 style={{background: overlay}}></div>
            <div className="flex text-center w-full">
                <Link href={link}
                      className="relative px-[90px] md:px-0 z-50 text-lg md:text-2xl text-white font-ritma cta-link w-full active:text-neutral-400">
                    <FadeIn>
                        <div className="flex items-center">
                            <span className="full-cta-arrow">→</span>
                            <span className="cta-link-text">{displayText}</span>
                        </div>
                    </FadeIn>
                </Link>
            </div>
        </div>
    );
}
