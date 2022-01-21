import Head from "next/head";
import { useRouter } from "next/router";
import Wrapper from "../../../components/Layout/Wrapper";
import Member from "../../../components/SeePlans/Step3D-Member";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMember } from "../../../store";

function MemberFormPage() {
  const router = useRouter();
  const { nth } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMember(nth));
  }, []);

  return (
    <>
      <Head>
        <title>Your Informations</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Member nth={nth} />
      </Wrapper>
    </>
  );
}

export default MemberFormPage;
