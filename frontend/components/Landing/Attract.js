import styled from "styled-components";
import { BPSmall, BPMedium, BPLarge } from "../Layout/BreakPoint";
import AttractFigure from "../../assets/svg/Attract";
import Link from "next/link";

const ContentAttractWrapper = styled.div`
  width: 100%;
`;
const ContentAttractContainer = styled.div`
  max-width: 84.375rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row wrap;
  background-size: cover;

  @media (min-width: ${BPSmall}) {
    padding: 0 15px;
  }
`;
const ContentAttract = styled.div`
  direction: ltr;
  display: grid;
  grid-template-rows: auto;
  margin: 32px auto;
  max-width: 100%;
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0;
  grid-template-columns: 1fr 50%;

  @media (max-width: 600px) {
    grid-template-columns: 100%;
  }
`;
const ContentAttractRightContainer = styled.figure`
  align-self: center;
  padding: 14%;
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 600px) {
    padding: 5%;
    grid-column: 1;
    grid-row: 2;
  }
`;
const ContentAttractLeftContainer = styled.div`
  align-self: center;
  word-break: break-word;
  grid-column: 1;
  grid-row: 1;
  padding: 14%;

  @media (max-width: 600px) {
    padding: 0 14%;
    grid-column: 1;
    grid-row: 1;
  }
`;
const ContentAttractSloganContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    display: none;
  }
`;
const ContentAttractSloganText = styled.div`
  color: #0071b1;
  border-radius: 30px;
  font-size: 0.8rem;
`;
const ContentAttractLeftTitle = styled.h1`
  text-align: center;
  line-height: 1.1;
  color: #2196f3;
  margin-bottom: 0.5rem;
  font-size: 1.9rem;
  font-weight: 800;

  @media (min-width: 600px) {
    text-align: left;
  }
  @media (min-width: ${BPMedium}) {
    line-height: 1.2;
    font-size: 2.3rem;
  }

  @media (min-width: ${BPLarge}) {
    line-height: 1.3;
    font-size: 2.8rem;
  }
`;
const ContentAttractLeftDescript = styled.p`
  margin-bottom: 0.8rem;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
const ContentAttractButtonContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const ContentAttractButton = styled.a`
  background-color: #2196f3;
  color: #fff;
  font-weight: 700;
  border-radius: 30px;
  padding: 0.8rem 1.5rem;

  &:hover {
    background-color: #1e88e5;
  }

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    justify-content: center;
  }
`;

const Attract = () => {
  return (
    <ContentAttractWrapper>
      <ContentAttractContainer>
        <ContentAttract>
          <ContentAttractRightContainer>
            <AttractFigure />
          </ContentAttractRightContainer>
          <ContentAttractLeftContainer>
            <ContentAttractSloganContainer>
              <ContentAttractSloganText>WeLoveWeCare</ContentAttractSloganText>
            </ContentAttractSloganContainer>

            <ContentAttractLeftTitle>
              Health Insurances For
              <br />
              Ones You Love
            </ContentAttractLeftTitle>
            {/* ------------------------------------------------ */}
            <ContentAttractLeftDescript>
              Enjoys all your moments knowing that the ones you love are
              protected
            </ContentAttractLeftDescript>
            <ContentAttractButtonContainer>
              <ContentAttractButton href="#getQuoteForm">
                Get A Quote
              </ContentAttractButton>
            </ContentAttractButtonContainer>
            {/* ------------------------------------------------ */}
          </ContentAttractLeftContainer>
        </ContentAttract>
      </ContentAttractContainer>
    </ContentAttractWrapper>
  );
};

export default Attract;
