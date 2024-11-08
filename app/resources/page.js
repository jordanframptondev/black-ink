import Image from "next/image";
import HomeCta from "../../public/images/resources.png";
import { FadeIn } from "../components/FadeIn";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ResourcesPreviewList } from "../components/server-components/ResourcesPreviewList";
export default function Resources() {
  return (
    <div className={"relative"}>
      <div className="bg-[#544F3D]">
        <Header color="cream" />
        <div className="flex lg:pt-40 lg:pb-10">
          <div className="w-1/3"></div>
          <div className="w-2/3">
            <PostHeader
              title={"5 Things Before You Say Yes to PLM"}
              image={HomeCta}
              author={"Collin Israel"}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#efeee8]">
        <div className="flex">
          <div className="w-1/3 lg:p-10">
            <h2 className="font-ritma uppercase text-black">Resources</h2>
          </div>
          <div className="w-2/3 lg:p-10">
            <PostBody />
          </div>
        </div>
      </div>

      <ResourcesPreviewList background="#39332e" />

      <div className={"text-[#EFEEE8] select-none"}>
        <div className={"relative"}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function PostHeader({ title, image, author }) {
  return (
    <div className="pr-10 text-[#EFEEE8]">
      <FadeIn>
        <h1 className={"font-signifier text-4xl text-light"}>{title}</h1>
      </FadeIn>
      <FadeIn>
        <div className="relative mt-10">
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-[#38311f] opacity-80"></div>
          <div className="bg-white">
            <Image src={image} alt={title} width={1220} height={610} />
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex justify-between items-center lg:mt-40">
          <p className="text-cream">{author}</p>
          <p className="uppercase">→ Next</p>
        </div>
      </FadeIn>
    </div>
  );
}

function PostBody() {
  return (
    <FadeIn>
      <p className="mb-6 font-signifier">
        In the rapidly evolving landscape of digital transformation,
        organizations must navigate complex challenges while maintaining their
        competitive edge. The intersection of technology and business strategy
        presents both opportunities and obstacles that require careful
        consideration and expert guidance.
      </p>

      <p className="mb-6 font-signifier">
        Digital Product Creation (DPC) has emerged as a cornerstone of modern
        product development, revolutionizing how companies conceptualize,
        design, and bring products to market. This transformation extends beyond
        mere 3D modeling, encompassing entire workflow processes and
        collaborative frameworks that drive innovation and efficiency.
      </p>

      <p className="mb-6 font-signifier">
        Product Lifecycle Management (PLM) systems serve as the backbone of
        successful product development strategies, enabling seamless
        communication and coordination across teams and external partners. The
        implementation of these systems requires a delicate balance between
        technical expertise and organizational change management.
      </p>

      <p className="mb-6 font-signifier">
        The integration of artificial intelligence and machine learning into
        planning processes has created unprecedented opportunities for accurate
        demand forecasting and inventory optimization. Companies that
        successfully leverage these technologies gain a significant advantage in
        reducing waste and improving operational efficiency.
      </p>

      <p className="mb-6 font-signifier">
        As we look to the future, the ability to adapt and evolve becomes
        increasingly critical. Organizations must embrace digital transformation
        not as a one-time initiative, but as an ongoing journey of continuous
        improvement and innovation. This mindset, coupled with strategic
        technology investments, positions companies for sustained success in an
        increasingly competitive marketplace.
      </p>
    </FadeIn>
  );
}
