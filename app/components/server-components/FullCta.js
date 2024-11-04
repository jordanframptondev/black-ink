import Image from 'next/image';
import Link from 'next/link';

export async function FullCta({backgroundImageSrc, overlay, displayText, link}) {
  return (
    <div className="bg-black relative w-screen h-screen flex items-center justify-center">
      <Image src={backgroundImageSrc} fill quality={100} placeholder="blur" sizes="100vw" alt="Black Ink" style={{
        objectFit: 'cover',
      }} />
      <div className={`absolute top-0 right-0 left-0 bottom-0 z-10 opacity-70`} style={{background: overlay}}></div>
      <Link href={link} className="relative z-50 text-xl text-white font-ritma">{displayText}</Link>
    </div>
  )
}