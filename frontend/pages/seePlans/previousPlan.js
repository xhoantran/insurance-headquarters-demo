import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import PreviousPlan from "../../components/SeePlans/Step3-PreviousPlan";

function PreviousPlanPage() {
  return (
    <>
      <Head>
        <title>Your Informations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <PreviousPlan />
      </Wrapper>
    </>
  );
}

export default PreviousPlanPage;
