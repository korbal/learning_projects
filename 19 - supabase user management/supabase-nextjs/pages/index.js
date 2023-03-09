// https://www.youtube.com/watch?v=0Fs96oZ4se0

import Head from "next/head";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "@/components/Account";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["github", "google", "twitter"]}
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
};

export default Home;
