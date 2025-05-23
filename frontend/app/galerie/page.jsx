import { getStrapiPage } from "@/actions/getStrapiPage";
import { marked } from "marked";
import Image from "next/image";
import Galerie from "./Galerie";

export async function generateMetadata() {
   const page = await getStrapiPage({ title: "Galerie" });

   return {
      title: page?.title || "Galerie",
      description: (page?.description || "").replace(/[#*]/g, "").slice(0, 160),
   };
}

export default async function GaleryPage() {
   const page = await getStrapiPage({ title: "Galerie" });

   return (
      <main className="wrapper prose">
         <h1>{page.title}</h1>
         <div
            dangerouslySetInnerHTML={{
               __html: marked.parse(page.description || ""),
            }}
         />
         {/* <Galerie images={page.Galerie} /> */}
      </main>
   );
}
