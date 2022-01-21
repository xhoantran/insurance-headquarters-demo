import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import Married from "../../components/SeePlans/Step3B-Married";

function MarriedPage() {
  return (
    <>
      <Head>
        <title>Your Informations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Married />
      </Wrapper>
    </>
  );
}

export default MarriedPage;
