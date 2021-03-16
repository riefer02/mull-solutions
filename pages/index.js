import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Panel from "../components/Panel";
import CardDeck from "../components/CardDeck";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className="container mx-auto bg-gray-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <Panel />
      <CardDeck />
      <Footer />
    </div>
  );
}
