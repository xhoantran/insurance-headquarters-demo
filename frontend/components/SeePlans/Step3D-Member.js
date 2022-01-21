import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DadPickUp from "../../assets/svg/S3A-DadPickUp";
import SeePlansBackground from "../../assets/svg/SeePlansBackground";
import { setMemberOptions } from "../../store";
import Bubble from "../Layout/Bubble";
import { ButtonBack, ButtonNext } from "./Button";
import Input from "./Input";
import ProgressBar from "./ProgressBar";
import RadioSelects from "./RadioSelects";
import { GetPathBackward, GetPathForward } from "./GetPath";
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

function BeginSeePlans({ nth }) {
  const dispatch = useDispatch();
  const informations = useSelector((state) => state.informations);
  const memberInfo = informations.people[nth];

  const checkDob = (dob) => {
    var regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return regex.test(dob);
  };
  const handleDobChange = (e) => {
    var { value } = e.target;
    if (
      ((value.length == 2 && /^(0?[1-9]|1[012])$/.test(value)) ||
        (value.length == 5 &&
          /^(0[1-9]|1[012])\/(0[1-9]|1\d|2\d|3[01])$/.test(value))) &&
      memberInfo?.dob?.length < value.length
    ) {
      value = value + "/";
    }
    dispatch(setMemberOptions(nth, { ...memberInfo, dob: value }));
  };
  const handleGenderChange = (e) => {
    dispatch(setMemberOptions(nth, { ...memberInfo, gender: e.target.value }));
  };
  const ContentTitleGenerator = (nth) => {
    switch (nth) {
      case "you":
        return "Tell us more about you";
      case "spouse":
        return "Your spouse";
      default:
        return nth.includes("dependent")
          ? `Dependent ${nth.replace("dependent", "")}`
          : `We need more information about ${nth}`;
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
              <ContentTitle>{ContentTitleGenerator(nth)}</ContentTitle>
              <FormContainer>
                <Input
                  label="Date of birth"
                  type="tel"
                  placeholder="MM/DD/YYYY"
                  maxLength={10}
                  onChange={handleDobChange}
                  value={memberInfo?.dob}
                  valid={checkDob(memberInfo?.dob)}
                  error={
                    !checkDob(memberInfo?.dob) && memberInfo?.dob?.length === 10
                  }
                  errorText="Please enter a valid date of birth"
                />
                <RadioSelects
                  radioOptions={[
                    {
                      detail: "Male",
                      optionValue: "Male",
                    },
                    {
                      detail: "Female",
                      optionValue: "Female",
                    },
                  ]}
                  selectValue={memberInfo?.gender}
                  onChange={handleGenderChange}
                  inputName="gender"
                  label="Gender"
                />
              </FormContainer>
              <ButtonNext
                url={GetPathForward(nth, informations)}
                disabled={
                  (!memberInfo?.gender && memberInfo?.gender === "") ||
                  !checkDob(memberInfo?.dob)
                }
              >
                Continue
              </ButtonNext>
              <ButtonBack url={GetPathBackward(nth, informations)}>
                Back
              </ButtonBack>
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
                  The provided informations help us to find the right plan with
                  the best coverage for you.
                </PlansRightText>
                <DadPickUp />
              </PlansRightContentContainer>
            </PlansRightContentWrapper>
          </PlansRightContainer>
        </PlansContainer>
      </PlansWrapper>
    </>
  );
}

export default BeginSeePlans;
