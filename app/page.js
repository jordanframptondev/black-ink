import HomeCta from '../public/images/home-cta.png';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeHeroAnimation } from "./components/HomeHeroAnimation";
import { Info } from "./components/Info";
import { FullCta } from "./components/server-components/FullCta";
import { ResourcesPreviewList } from "./components/server-components/ResourcesPreviewList";
import { Testimonials } from "./components/Testimonials";

const sampleSections = [
  {
    title: "People First- Always",
    description: `At Black Ink, we recognize that every organization is comprised of individuals with unique perspectives, experiences, and motivations. By prioritizing people over process, we foster a collaborative environment that honors the dedication and expertise of our clients' teams and empowers them to unlock their own potential. Through this approach, we uncover solutions that are tailored to the specific needs and aspirations of each organization, rather than imposing generic fixes that neglect the human element.`,
  },
  {
    title: "In | On - The Business",
    description: `We believe that the most effective solutions are those that are deeply ingrained in the fabric of an organization, rather than superficially imposed from the outside. By immersing ourselves in the inner workings of our clients' businesses, we develop a nuanced understanding of their unique challenges and opportunities, and co-create solutions that are tailored to their specific needs. This inside-out approach enables us to drive meaningful, lasting impact that are intuitive, sustainable, and aligned with the organization's long-term vision.`,
  },
  {
    title: "Short-Term Win / Long-Term Results",
    description: `Our approach is designed to deliver tangible, near-term benefits that demonstrate the value of our partnership, while simultaneously laying the groundwork for long-term success. By focusing on incremental wins that align with our clients' strategic objectives, we build momentum, establish trust, and create a foundation for sustained growth and transformation. This balanced approach enables our clients to realize immediate returns on their investment, while also positioning themselves for enduring success in an ever-evolving business landscape.`,
  },
  {
    title: "Future Proof",
    description: `The future of business is being rewritten before our eyes. At Black Ink, we recognize that future-proofing is no longer a nicety, but a necessity. We've made it our mission to help our clients prepare for the unknown, to anticipate the trends that will shape their industries, and to build the resilience and agility needed to thrive in a world that's increasingly complex and uncertain. We're committed to helping our clients stay ahead of the curve, and to emerge stronger, more adaptable, and more resilient in the face of an uncertain future.`,
  },
];

const servicesSection = [
  {
    title: "Product Life Cycle Management (PLM)",
    description: `PLM software accelerates product development, improves communication throughout the business and with external partners, and unlocks opportunities to improve margin and quality.  
  Black Ink designs and implements PLM systems that seamlessly align with our clients' strategic objectives, driving efficiency, collaboration, and innovation throughout the product lifecycle.
  From selection to implementation, support, and ongoing improvement, our team delivers a comprehensive and expert approach to PLM that enables organizations to optimize their product development processes and achieve their business goals.`,
  },

  {
    title: "Planning",
    description: `Accurate planning eludes most companies as evident by the prolific waste and inventory that exists within the industry. Planning what to make and predicting how much the market demands is a complex exercise.  AI enabled technology presents new opportunities, but will create insurmountable challenges for companies that are  left behind. We work closely with our clients to develop a tailored planning approach that aligns with their strategic objectives, ensuring that their technology investments drive business outcomes. Black Ink’s approach helps companies establish achievable goals, considering both top-down and bottoms-up perspectives, and leveraging the latest capabilities of planning systems.`,
  },

  {
    title: "Digital Product Creation",
    description: `Digital Product Creation (DPC) is often associated with designing products in 3D, but it encompasses a much broader transformation that can revolutionize the entire product lifecycle, enabling companies to reimagine their business processes and operations.
  At Black Ink, we help companies unlock the full potential of DPC by guiding them through a comprehensive transformation that drives business outcomes, including increased innovation, efficiency, and growth, and positions them for long-term success in a rapidly evolving market.`,
  },

  {
    title: "Business Analytics",
    description: `Business analytics, in our view, is an art of illumination, shedding light on the complexities of an organization and revealing the intricate relationships between people, processes, and technology. Our approach to analytics is guided by a deep understanding of the executive's perspective, and is designed to provide a nuanced and contextualized view of the business, empowering leaders to navigate the uncertain and make strategic choices with confidence.`,
  },

  {
    title: "Change Management & Organizational Readiness",
    description: `Sound product, strategy and products are required to create future proof organizations, but people make companies function. Employees’ inability to adapt and learn works in direct opposition to these investments.  In contrast, employees that are ready for change accelerate adoption and future innovation.`,
  },
];

const partnerSections = [
  {
    title: "Colin Israel",
    description: `Colin has held diverse executive positions in the apparel and footwear industry, including roles as CEO, CFO, COO, CIO and GM of Asia. He brings a global perspective following Expat assignments in Europe and Asia. Colin spent nine years at Deloitte in Strategy & Operations Consulting and Enterprise Risk Services, he also Skis a lot…`,
  },
  {
    title: "Walter Wilhelm",
    description: `Walter has years of executive experience working with the apparel, footwear, and retail industries. In addition, Walter spent 7 years as President of a leading consulting firm. Before work he logs crazy miles running on the trails with his dog...`,
  },
];

export default function Home() {
  return (
    <div className="relative">
      <Header color="cream"/>
      <HomeHeroAnimation />
      <div className="mt-screen bg-black h-screen py-12 px-8 h-screen flex flex-col justify-between">
        <h3 className="text-center text-white text-3xl border-t border-white pt-12">
          There are <i>many futures,</i> Black Ink points you to{" "}
          <i>the right one.</i>
        </h3>
        <h2 className="text-center text-white text-3xl">
          We facilitate the <i>selection, design, and implementation</i> of
          strategic projects.
        </h2>
      </div>
      <Info background="#534f3d" title="ETHOS" sections={sampleSections} />
      <Testimonials />
      <FullCta overlay="#3A332E" link="/contact" displayText="→ FIND THE PATH TO FUTURE PROOF" backgroundImageSrc={HomeCta} />
      <Info
        background="#efeee8"
        title="SERVICES"
        sections={servicesSection}
        textLight={false}
      />
      <ResourcesPreviewList />
      <Info
        background="#efeee8"
        title="PARTNERS"
        sections={partnerSections}
        textLight={false}
      />
      <div className="text-[#EFEEE8]">
        <Footer />
      </div>
    </div>
  );
}
