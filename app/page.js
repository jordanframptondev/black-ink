import { Info } from "./components/info";
import { LottiePlayer } from "./components/lottiePlayer";

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

export default function Home() {
  // const content = getHomeContent();
  return (
    <>
      <div className="h-screen w-screen">
        <LottiePlayer />
      </div>
      <div className="mt-screen py-12 h-screen flex flex-col justify-between">
        <h3 className="text-center text-white text-3xl">There are <i>many futures,</i> Black Ink points you to <i>the right one.</i></h3>
        <h2 className="text-center text-white text-3xl">We facilitate the <i>selection, design, and implementation</i> of strategic projects.</h2>
      </div>
      <Info background="#534f3d" title="ETHOS" sections={sampleSections} />
    </>
  );
}
