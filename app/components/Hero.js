import BlackInkLogo from "@/public/images/black-ink-logo-cream.png";
import Image from "next/image";

export function Hero() {
  return (
      <div
          className="-z-50 w-full h-full fixed top-0 left-0 bg-black flex flex-col justify-between items-center lg:p-[40px]">
          <div className="flex justify-between w-full"></div>
          <div
              className="relative z-10 bg-black opacity-20"
              style={{width: "150px", height: "150px"}}
          >
              <Image
                  src={BlackInkLogo}
                  width={150}
                  height={150}
                  alt="Black Ink"
                  className="absolute top-0 left-0"
              />
          </div>
          <h1 className="text-white text-lg lg:text-2xl white font-ritma uppercase pb-11">
              into the black
          </h1>
      </div>
  );
}