import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Panel from "../components/Panel";
import CardDeck from "../components/CardDeck";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mull Solutions — Advanced Insights</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <div className="container mx-auto">
        <Panel />
        <CardDeck />
      </div>
      <Footer />
    </div>
  );
}
