import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Resource } from "../components/Resource";
import { ResourcesPreviewList } from "../components/server-components/ResourcesPreviewList";
export default function Resources() {
  return (
    <div className={"relative"}>
    <Header color="cream" />
      <Resource />
      <ResourcesPreviewList background="#39332e" />

      <div className={"text-[#EFEEE8] select-none"}>
        <div className={"relative"}>
          <Footer />
        </div>
      </div>
    </div>
  );
}




