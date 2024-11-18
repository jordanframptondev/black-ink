import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import ResourceArticle from "../../components/ResourceArticle";
import {ResourcesPreviewList} from "../../components/ResourcesPreviewList";

export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.slug
    }));
}

export default async function ResourcePage({params: {slug}}) {
    const blogArticle = blogArticles.find(article => article.slug === slug);
    return (
        <div className="relative">
            <Header color="cream"/>
            <ResourceArticle article={blogArticle}/>
            <ResourcesPreviewList background="#39332e"/>
            <div className={"text-[#EFEEE8] select-none"}>
                <div className={"relative"}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}


export const blogArticles = [
    {
        slug: "exploring-the-mysteries-of-the-fjords",
        title: "Exploring the Mysteries of the Fjords",
        image: "/images/resources.png",
        author: "Alex Norland",
        text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis lectus a purus posuere consectetur. Curabitur non lectus in magna ullamcorper malesuada vel sit amet eros. Vivamus ac suscipit massa. Integer condimentum nunc id risus efficitur, in ultricies erat pretium. Nam eu lorem lacus.

      Proin eu ligula auctor, interdum mauris ut, faucibus justo. Aliquam fermentum neque a elit fermentum, sit amet tincidunt eros luctus. Fusce volutpat risus magna, vel vestibulum nisi suscipit nec. Sed tempus, magna nec elementum consequat, ligula ligula dictum mi, ac fringilla erat purus vel metus. Maecenas faucibus risus a magna lacinia, quis posuere elit tincidunt.

      Ut at sapien quis metus tincidunt congue. Etiam feugiat sem sit amet nulla dictum, vitae tincidunt mi hendrerit. Donec at lacus a nulla fermentum facilisis. Integer malesuada mi at massa cursus pretium. Duis ut tristique quam.

      Vestibulum euismod nec lectus ut venenatis. Integer at sagittis eros, at vehicula lacus. Donec condimentum lorem et metus porttitor, quis elementum elit malesuada. Nulla interdum, mauris vitae pulvinar bibendum, justo nisi varius sapien, vitae egestas velit est non mi.

      Sed eu quam vulputate, mollis metus sed, luctus nulla. Nam at vehicula lectus. In hac habitasse platea dictumst. Nulla auctor mollis arcu, vel interdum orci hendrerit et. Curabitur id metus ac magna volutpat sagittis.
    `
    },
    {
        slug: "the-art-of-sustainable-living",
        title: "The Art of Sustainable Living",
        image: "/images/resources-2.png",
        author: "Jordan Greene",
        text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra purus a enim tincidunt, non sodales justo fringilla. Cras lacinia ultricies ex, at pulvinar erat sollicitudin id. Duis vel magna eget lectus interdum aliquam. Nunc ut vehicula mauris.

      Aliquam erat volutpat. Pellentesque id justo vel nulla malesuada pretium. Proin volutpat ipsum in ipsum iaculis gravida. Nulla scelerisque vestibulum nisi, eget lacinia purus suscipit nec. Integer aliquam purus at lacus rhoncus, at varius mauris molestie.

      Suspendisse potenti. Quisque ac orci eros. Phasellus efficitur risus nec massa vestibulum, at mollis justo elementum. Vivamus posuere, eros non dictum vehicula, mi elit dignissim lorem, id varius nulla purus sed arcu. Donec sit amet leo eget eros euismod vehicula.

      Ut volutpat consequat libero, sed elementum lacus vehicula id. Proin vitae diam a lorem consequat malesuada. Vestibulum fringilla, risus vel laoreet fringilla, elit enim consectetur arcu, nec dapibus mi augue sit amet mi. Fusce dictum, orci at porttitor faucibus, lacus magna viverra sapien, sed rutrum ex dolor sed elit.

      Fusce ac ante sit amet enim luctus sollicitudin vel non nunc. Aenean fermentum est eget erat gravida, et sodales odio volutpat. Donec nec dolor vitae erat mollis aliquet. Maecenas sed lorem sit amet risus cursus pharetra.
    `
    },
    {
        slug: "adventures-in-digital-nomadism",
        title: "Adventures in Digital Nomadism",
        image: "/images/resources-3.png",
        author: "Casey Morgan",
        text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id purus vel risus sollicitudin egestas non at turpis. Nullam vulputate libero et elit fermentum, vel feugiat magna eleifend. Cras at tristique urna, vel sollicitudin ligula. Pellentesque eu nulla nisi.

      Aenean aliquam sapien sed ligula congue, sed efficitur elit viverra. Mauris consequat malesuada dui non hendrerit. Nam fringilla purus nec urna luctus, quis congue erat blandit. Etiam at risus id erat feugiat venenatis non ac nulla.

      Quisque id sapien eu arcu pharetra sodales. Aliquam maximus orci quis dictum pharetra. Vivamus vitae ante eget purus consectetur eleifend. Praesent bibendum nulla nec leo ultricies, in vestibulum lorem facilisis. Duis cursus ex vitae magna fringilla porttitor.

      Nullam dignissim, nisi ac bibendum fermentum, felis lectus dictum orci, sit amet tincidunt quam purus nec magna. Donec volutpat, eros nec efficitur porttitor, libero felis hendrerit sapien, quis tincidunt est neque et urna. Vestibulum nec velit turpis.

      Sed convallis ligula nec neque mattis, at gravida arcu dictum. Sed vehicula dui id nisi dignissim laoreet. Pellentesque id velit consequat, vehicula nisl non, bibendum dolor. Nulla vel orci quis arcu tristique consequat.
    `
    },
    {
        slug: "harnessing-the-power-of-mindfulness",
        title: "Harnessing the Power of Mindfulness",
        image: "/images/resources-4.png",
        author: "Taylor Quinn",
        text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac suscipit magna. Etiam venenatis massa in felis sollicitudin, in posuere ipsum egestas. Nulla facilisi. Aliquam dictum, neque a malesuada scelerisque, eros erat efficitur turpis, et ultricies lorem risus non nulla.

      Sed eu eros ut risus viverra pretium. Vestibulum at magna ut nunc dictum laoreet. Nullam nec purus nec eros aliquet molestie. Cras suscipit eros at lectus bibendum tristique. Duis volutpat lectus sit amet quam ornare tincidunt.

      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean condimentum, risus non fringilla tincidunt, augue urna feugiat mi, nec vestibulum lorem urna quis nunc. Quisque interdum sapien vel velit accumsan tincidunt.

      Proin non risus non purus consequat blandit vel non lectus. Vivamus venenatis lorem a dui efficitur, vel aliquam purus posuere. Nulla nec risus a eros dictum vehicula vel non mi. Pellentesque facilisis nisl quis arcu sollicitudin, nec vestibulum lorem feugiat.

      Integer congue lorem a sapien fermentum dapibus. Vivamus vulputate justo vitae libero blandit, vitae cursus est convallis. Fusce posuere malesuada lacus, vel sodales ligula bibendum quis. Aenean tincidunt, arcu at volutpat elementum, justo sapien convallis magna, eget fringilla nulla neque sed justo.
    `
    },
    {
        slug: "unveiling-the-secrets-of-ancient-artifacts",
        title: "Unveiling the Secrets of Ancient Artifacts",
        image: "/images/resources-5.png",
        author: "Riley Carter",
        text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit hendrerit tortor in dapibus. Nullam at erat nec urna feugiat pharetra ac et erat. Pellentesque sed sapien fringilla, eleifend nisl ut, accumsan mauris. Aliquam erat volutpat.

      Nulla malesuada sem sed turpis faucibus, quis ultricies magna auctor. Donec vehicula eros at arcu scelerisque, in congue elit consequat. Donec laoreet lectus id ipsum fermentum auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

      Integer volutpat convallis mi, in congue neque tristique et. Aliquam id lacus varius, vehicula purus at, gravida sem. Pellentesque malesuada elit et velit finibus malesuada. Morbi vel nulla arcu. Duis pharetra felis vitae orci ultrices, vel cursus libero varius.

      Morbi in ligula in nulla hendrerit dictum non ut ipsum. Proin vehicula leo non nisi suscipit dictum. Vivamus auctor, augue vel vehicula posuere, magna neque iaculis lectus, eget cursus lectus nisi nec mi. Donec et tincidunt ipsum.

      Integer feugiat nulla quis tortor lacinia dapibus. Suspendisse potenti. Donec nec ligula venenatis, tincidunt neque a, dapibus mi. Fusce efficitur justo a orci dignissim, nec scelerisque orci eleifend.
    `
    }
];




