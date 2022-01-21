import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPreviousPlan } from "../../store";
import styled from "styled-components";
import SearchDocument from "../../assets/svg/S3-SearchDocument";
import SeePlansBackground from "../../assets/svg/SeePlansBackground";
import Bubble from "../Layout/Bubble";
import { ButtonBack, ButtonNextOrSkip } from "./Button";
import ProgressBar from "./ProgressBar";
import Input from "./Input";
import { S2LocationURL, S3HouseholdURL } from "./Url";
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
  const previousPlan = useSelector(
    (state) => state.informations?.previousPlan?.id
  );
  const [planID, setPlanID] = useState(previousPlan);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = async (event) => {
    var value = event.target.value;
    var length = value.length;

    setPlanID(event.target.value);

    if (length === 0) {
      setError(false);
    }

    if (length === 14) {
      const res = await fetch(
        `https://insurance-headquarter.herokuapp.com/api/v1/plan/${value}/`
      );
      if (res.status === 200) {
        const data = await res.json();
        dispatch(setPreviousPlan(data["plan"]));
        setError(false);
      }
      if (res.status === 404 || res.status === 400) {
        setError(true);
      }
    }
  };

  return (
    <>
      <Header />
      <PlansWrapper>
        <PlansContainer>
          <PlansLeftContainer>
            <ProgressBar active={3} />
            <ContentContainer>
              <ContentTitle>Previous Plan</ContentTitle>
              <ContentText>
                Enter your 14-character Plan ID and we&apos;ll highlight your
                2021 plan when you compare plans. If you don&apos;t know your
                Plan ID, select Skip.
              </ContentText>
              <FormContainer>
                <Input
                  label="Plan ID"
                  placeholder="Ex: 11512NC0100031"
                  value={planID}
                  onChange={handleChange}
                  error={error}
                  errorText="Cannot find the plan matching this ID"
                  maxLength={14}
                  valid={planID?.length === 14 && !error}
                />
              </FormContainer>
              <ButtonNextOrSkip
                url={S3HouseholdURL}
                skip={planID?.length !== 14 || error}
              >
                Continue
              </ButtonNextOrSkip>
              <ButtonBack url={S2LocationURL}>Back</ButtonBack>
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
                  The previous plan help us to know more about you, so that we
                  can help you find the similar plans with lower cost.
                </PlansRightText>
                <SearchDocument />
              </PlansRightContentContainer>
            </PlansRightContentWrapper>
          </PlansRightContainer>
        </PlansContainer>
      </PlansWrapper>
    </>
  );
}

export default BeginSeePlans;
