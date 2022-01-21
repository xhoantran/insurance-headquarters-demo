import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import Location from "../../components/SeePlans/Step2-Location";

function GetZipCodePage() {
  return (
    <>
      <Head>
        <title>Your Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Location />
      </Wrapper>
    </>
  );
}

export default GetZipCodePage;
