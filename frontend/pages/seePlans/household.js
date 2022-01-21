import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import HouseholdSize from "../../components/SeePlans/Step3A-HouseholdSize";

function HouseholdSizePage() {
  return (
    <>
      <Head>
        <title>Your Informations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <HouseholdSize />
      </Wrapper>
    </>
  );
}

export default HouseholdSizePage;
