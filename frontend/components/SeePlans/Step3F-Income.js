import { useSelector, useDispatch } from "react-redux";
import { setIncome } from "../../store";
import styled from "styled-components";
import Revenue from "../../assets/svg/S3F-Revenue";
import SeePlansBackground from "../../assets/svg/SeePlansBackground";
import Bubble from "../Layout/Bubble";
import { ButtonBack, ButtonNext } from "./Button";
import ProgressBar from "./ProgressBar";
import Input from "./Input";
import { S3TotalMemberURL, S4ShowPlansURL } from "./Url";
import Header from "./Header";

const PlansWrapper = styled.div`
preSpan="$"
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
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const PlansLeftContainer = styled.div`
  align-self: center;
  word-break: break-word;
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  height: calc(100vh - 50px - 2rem);
  margin-top: calc(50px + 2rem);
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 465px;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`;
const ContentTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;
const ContentText = styled.p`
  text-align: left;
  line-height: 22px;
  margin-bottom: 30px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PlansRightContainer = styled.div`
  align-self: center;
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  height: 100vh;
  background-color: #fafbfc;
  position: relative;

  @media (max-width: 600px) {
    display: none;
  }
`;
const PlansRightAbsolute = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  padding 14%;
`;
const PlansRightContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding 14%;
  z-index: 1;
  position: relative;
`;
const PlansRightContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  z-index: 1;
  @media (min-width: 1024px) {
    padding: 14%;
  }
`;
const PlansRightText = styled.p`
  text-align: center;
  line-height: 22px;
  font-weight: 400;
  color: #0d47a1;
  font-size: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function BeginSeePlans() {
  const informations = useSelector((state) => state.informations);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setIncome(e.target.value));
  };

  return (
    <>
      <Header />
      <PlansWrapper>
        <PlansContainer>
          <PlansLeftContainer>
            <ProgressBar active={3} />
            <ContentContainer>
              <ContentTitle>2022 Income</ContentTitle>
              <ContentText>
                What do you think your household income will be in 2022?
              </ContentText>
              <FormContainer>
                <Input
                  label="Expected 2022 income"
                  value={informations.income}
                  onChange={handleChange}
                  preSpan="$"
                />
              </FormContainer>
              <ButtonNext
                url={S4ShowPlansURL}
                disabled={!(informations.income > 0)}
              >
                Continue
              </ButtonNext>
              <ButtonBack url={S3TotalMemberURL}>Back</ButtonBack>
            </ContentContainer>
          </PlansLeftContainer>
          <PlansRightContainer>
            <Bubble />
            <PlansRightAbsolute>
              <SeePlansBackground />
            </PlansRightAbsolute>
            <PlansRightContentWrapper>
              <PlansRightContentContainer>
                <PlansRightText>
                  Your income helps us determine the plans and savings that you
                  qualify for.
                </PlansRightText>
                <Revenue />
              </PlansRightContentContainer>
            </PlansRightContentWrapper>
          </PlansRightContainer>
        </PlansContainer>
      </PlansWrapper>
    </>
  );
}

export default BeginSeePlans;
