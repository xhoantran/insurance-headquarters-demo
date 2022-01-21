import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import Income from "../../components/SeePlans/Step3F-Income";

function TotalMemberPage() {
  return (
    <>
      <Head>
        <title>Your Informations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Income />
      </Wrapper>
    </>
  );
}

export default TotalMemberPage;
