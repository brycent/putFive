/* eslint-disable import/no-unresolved */
import React from "react";
import Head from "next/head";
import { LandingNavbar } from "../components/Navbar/LandingNavbar";
import { LandingContent } from "../components/LandingContent/LandingContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <LandingNavbar />
      <LandingContent />
    </div>
  );
}
