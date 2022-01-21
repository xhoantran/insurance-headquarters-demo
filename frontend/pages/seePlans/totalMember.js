import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import TotalMember from "../../components/SeePlans/Step3E-TotalMember";

function TotalMemberPage() {
  return (
    <>
      <Head>
        <title>Total Members</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <TotalMember />
      </Wrapper>
    </>
  );
}

export default TotalMemberPage;
