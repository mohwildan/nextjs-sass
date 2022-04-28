import Head from "next/head";
import Hero from "../components/hero/Hero";
import Service from "../components/hero/Service";
import Layout from '/layout/Layout'

export default function Home() {
  return (
    <>
    <Head>
      <title>About Me | Wildan</title>
    </Head>
    <Layout>
      <Hero />
      <Service />
    </Layout>
    </>
  );
}
