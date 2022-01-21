import Head from "next/head";
import Wrapper from "../components/Layout/Wrapper";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Attract from "../components/Landing/Attract";
import SupplierLogo from "../components/Landing/SupplierLogo";
import OurService from "../components/Landing/OurService";
import GetQuoteForm from "../components/Landing/GetQuoteForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Health Insurance | Find Your Affordable Price</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Insurance Headquarters is a leading destination for people searching for health insurance. Get the latest information on coverage, providers and costs."
        />
      </Head>
      <Wrapper>
        <Header />
        <Attract />
        <OurService />
        <SupplierLogo />
        <GetQuoteForm />
        <Footer />
      </Wrapper>
    </>
  );
}
