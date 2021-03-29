/* eslint-disable import/no-unresolved */
import React from "react";
import Head from "next/head";
import Amplify, { Auth } from "aws-amplify";
import { LandingNavbar } from "../components/Navbar/LandingNavbar";
import { LandingContent } from "../components/LandingContent/LandingContent";

export default function Home() {
  Amplify.configure({
    Auth: {
      region: "us-east-1",
      userPoolId: "us-east-2_1H5VQ2WJm",
      userPoolWebClientId: "4u45u6k3ln0157f2354e27dvld",
    },
  });
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
