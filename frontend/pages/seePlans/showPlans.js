import Head from "next/head";
import Wrapper from "../../components/Layout/Wrapper";
import ShowPlans from "../../components/SeePlans/Step4-ShowPlans";
import { useRouter } from "next/router";

function TotalMemberPage() {
  const router = useRouter();
  const { page } = router.query;
  const pageNumber = parseInt(page) || 1;

  return (
    <>
      <Head>
        <title>Show Plans | Page {pageNumber}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <ShowPlans pageNumber={pageNumber || 1} />
      </Wrapper>
    </>
  );
}

export default TotalMemberPage;
