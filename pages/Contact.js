import Contactt from "../components/Contact/Contactt";
import Layout from "../layout/Layout";
import Head from "next/head";
function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me | Wildan</title>
      </Head>
      <Layout>
        <Contactt />
      </Layout>
    </>
  );
}

export default Contact;
