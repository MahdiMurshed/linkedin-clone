import Head from "next/head";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Feed | LinkedIn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3 className="text-3xl">LinkedIn</h3>
      <button onClick={signOut}>sign out</button>
    </div>
  );
}
