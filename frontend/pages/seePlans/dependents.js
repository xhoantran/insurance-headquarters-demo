import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import Dependents from "../../components/SeePlans/Step3C-Dependents";

function DependentsPage() {
  return (
    <>
      <Head>
        <title>Your Informations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Dependents />
      </Wrapper>
    </>
  );
}

export default DependentsPage;
