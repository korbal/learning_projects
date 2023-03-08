import supabase from "@/utils/supabase";
import { notFound } from "next/navigation";

// if a new row is added to db, the url will be available but it won't show up in the list of posts. we need to redeploy the app to get the new post to show up in the list of posts. so generatestaticparams is a way to show what pages we want to generate ahead of time, but if the user wants to go to a url that was not pre-generated, next.js will still try to go there (and if it finds it in the db, it will server render it) https://www.youtube.com/watch?v=GniRj1jIhFw&t=2s  .
export async function generateStaticParams() {
  const { data: posts } = await supabase.from("posts").select("id");
  console.log(posts);

  return posts ?? [];
}

// export async function generateStaticParams() {
//   const { items } = await fetch(
//     "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec"
//   )
//     .then((response) => response.json())
//     .catch((error) => console.error(error));

//   const names = items.map((item) => {
//     return { id: item.name };
//   });
//   console.log(names);

//   return names ?? [];
// }

//the goal here is to compile a list of all the URIs that need to be generated
// export async function generateStaticParams() {
//   const { data:posts } = fetch(
//     "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data.name))
//     .catch((error) => console.error(error));

//   return posts ?? [];
// }
//------------------------------------------------

// export async function generateStaticParams() {
//   try {
//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbylLKlTRlulUb0x9r9j2Wvxa5W64g49NOT9kOsXR-N6LiPRamqA/exec"
//     );
//     const data = await response.json();
//     console.log(data.items[2].name);
//     return data.items ?? [];
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }
//------------------------------------------------

// id comes from the url and then is passed to the function so that it can retrieve the correct data

export default async function Posts({ params: { id } }) {
  const { data: post } = await supabase
    .from("posts")
    .select()
    .match({ id })
    .single();

  if (!post) {
    notFound();
  }

  return <pre>{JSON.stringify(post, null, 2)}</pre>;
}
