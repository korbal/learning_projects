import supabase from "@/utils/supabase";

export default async function Posts() {
  const { data, error } = await supabase.from("posts").select();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
