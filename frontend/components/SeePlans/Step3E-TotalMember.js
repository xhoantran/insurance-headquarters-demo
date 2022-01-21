import { useSelector } from "react-redux";
import styled from "styled-components";
import { ButtonBack, ButtonNext } from "./Button";
import ProgressBar from "./ProgressBar";
import { S3IncomeURL } from "./Url";
import TotalMembers from "./TotalMembers";
import { GetPathBackward } from "./GetPath";
import Header from "./Header";

const PlansWrapper = styled.div`
  background-color: var(--background--color);
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`;
const PlansContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const PlansLeftContainer = styled.div`
  align-self: center;
  word-break: break-word;
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 90%;
  height: calc(100vh - 50px - 2rem);
  margin-top: calc(50px + 2rem);
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 465px;
  width: 100%;
  margin-top: 30px;
`;
const ContentTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function BeginSeePlans() {
  const informations = useSelector((state) => state.informations);

  return (
    <>
      <Header />
      <PlansWrapper>
        <PlansContainer>
          <PlansLeftContainer>
            <ProgressBar active={3} />
            <ContentContainer>
              <ContentTitle>Household members</ContentTitle>
              <FormContainer>
                <TotalMembers addBlock={true} />
              </FormContainer>
              <ButtonNext url={S3IncomeURL}>Confirm</ButtonNext>
              <ButtonBack url={GetPathBackward("totalMember", informations)}>
                Back
              </ButtonBack>
            </ContentContainer>
          </PlansLeftContainer>
        </PlansContainer>
      </PlansWrapper>
    </>
  );
}

export default BeginSeePlans;
