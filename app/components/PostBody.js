import { PortableText } from "@portabletext/react";
import { FadeIn } from "./FadeIn";
import Image from "next/image";
import { urlFor } from "../utils/cms-service";

const components = {
    block: {
        h1: ({children}) => <h1 className="text-4xl mb-4">{children}</h1>,
        h2: ({children}) => <h2 className="text-3xl mb-4">{children}</h2>,
        h3: ({children}) => (
            <h3 className="text-2xl font-semibold mb-4">{children}</h3>
        ),
        h4: ({children}) => <h4 className="text-xl mb-4">{children}</h4>,
        normal: ({children}) => <p>{children}</p>,
    },
    marks: {
        strong: ({children}) => (
            <strong className="font-bold">{children}</strong>
        ),
        em: ({children}) => <em className="italic">{children}</em>,
        link: ({value, children}) => {
            const target = value?.href?.startsWith("http")
                ? "_blank"
                : undefined;
            return (
                <a
                    href={value.href}
                    target={target}
                    className="underline cursor-pointer"
                    rel={target ? "noopener noreferrer" : undefined}
                >
                    {children}
                </a>
            );
        },
    },
    list: {
        bullet: ({children}) => (
            <ul className="list-disc ml-5">{children}</ul>
        ),
        number: ({children}) => (
            <ol className="list-decimal ml-5">{children}</ol>
        ),
    },
    listItem: ({children}) => <li>{children}</li>,
    types: {
        image: ({value}) => (
            <div className="my-6">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || "Image"}
                    width={800}
                    height={600}
                    className="w-auto max-w-full h-auto object-contain"
                />
            </div>
        ),
    },
};

export default function PostBody({text}) {
    return (
        <FadeIn>
            <div className="post-body pt-16 md:pt-0">
                <div className="mb-6 font-signifier text-xl md:text-2xl whitespace-pre-line">
                    <PortableText value={text} components={components}/>
                </div>
            </div>
        </FadeIn>
    );
}
