import "@/styles/full-cta.css";
import Image from 'next/image';
import Link from 'next/link';
import {FadeIn} from '../FadeIn';

export async function FullCta({backgroundImageSrc, overlay, displayText, link}) {
    return (
        <div className="relative flex items-center justify-center bg-black w-screen min-h-dvh">
            <Image src={backgroundImageSrc} fill quality={100} placeholder="blur" sizes="100vw" alt="Black Ink" style={{
                objectFit: 'cover',
            }}/>
            <div className={`absolute top-0 right-0 left-0 bottom-0 z-10 opacity-70`}
                 style={{background: overlay}}></div>
            <div className="flex text-center w-full">
                <Link href={link}
                      className="relative px-10 md:px-0 z-50 text-[18px] md:text-[22px] text-white font-ritma cta-link w-full active:text-neutral-400">
                    <FadeIn>
                        <span className="arrow">→</span>
                        <span className="cta-link-text">{displayText}</span>
                    </FadeIn>
                </Link>
            </div>
        </div>
    );
}
