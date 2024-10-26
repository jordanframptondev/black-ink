import Link from 'next/link';
import { getCtaData } from '../../utils/cms-service';

export async function FullCta() {
  const data = await getCtaData('Home Page CTA');
  
  if (!Array.isArray(data) || data?.length === 0) {
    return null;
  }

  const {link, overlay, backgroundImage, displayText} = data[0];

  return (
    <div className="relative w-screen h-screen flex items-center justify-center" style={{backgroundImage: `url(${backgroundImage?.asset?.url})`}}>
      <div className={`absolute top-0 right-0 left-0 bottom-0 z-10 opacity-70`} style={{background: overlay}}></div>
      <Link href={link} className="relative z-50 text-xl text-white font-ritma">{displayText}</Link>
    </div>
  )
}