/* eslint-disable import/no-unresolved */
import Head from "next/head";
import { LandingNavbar } from "../components/Navbar/LandingNavbar";
import { LandingContent } from "../components/LandingContent/LandingContent";
import styles from "../styles/Home.module.css";

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
