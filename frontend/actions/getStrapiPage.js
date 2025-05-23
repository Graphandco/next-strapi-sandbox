"use server";

export async function getStrapiPage({ id, title }) {
   let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages?populate=*`;

   if (id) {
      url += `/${id}`;
   }

   const res = await fetch(url, { cache: "no-store" });

   if (!res.ok) {
      throw new Error("Erreur lors de la récupération de la page");
   }

   const json = await res.json();

   if (id) {
      return json.data;
   }

   // Si on cherche par title, filtrer les résultats
   const page = json.data.find((page) => page.title === title);
   return page;
}

export async function getStrapiAllPages() {
   let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/pages`;
   const res = await fetch(url, { cache: "no-store" });

   if (!res.ok) {
      throw new Error("Erreur lors de la récupération de la page");
   }

   const json = await res.json();

   if (json) {
      return json.data;
   }
}
