import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import GetStarted from "../../components/SeePlans/Step1-GetStarted";

function GetStartedPage() {
  return (
    <>
      <Head>
        <title>Get Started</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <GetStarted />
      </Wrapper>
    </>
  );
}

export default GetStartedPage;
