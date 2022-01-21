import styled from "styled-components";
import { BPSmall, BPMedium } from "../Layout/BreakPoint";
import DataPhone from "../../assets/svg/DataPhone";
import GraphMan from "../../assets/svg/GraphMan";
import WorkOnline from "../../assets/svg/WorkOnline";
import VersionControl from "../../assets/svg/VersionControl";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  padding: 6rem 2rem;
  border-top: 2px solid #f8f5f1;

  @media (max-width: ${BPSmall}) {
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;
const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BlueColor = styled.span`
  color: #00a8ff;
`;
const SectionHeadingTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;
const SectionHeadingText = styled.p`
  max-width: 42rem;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;

  @media (max-width: ${BPMedium}) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;
const RowItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;
  margin-right: 3rem;

  &:last-child {
    margin-right: 0;
  }

  & > svg {
    width: 15rem;
    height: 15rem;
  }
  @media (max-width: ${BPMedium}) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
const ItemText = styled.p`
  margin-top: 0.5rem;
  @media (max-width: ${BPMedium}) {
    max-width: 600px;
  }
`;
const FlexRow = ({ data }) => {
  return (
    <RowContainer>
      <RowItem>
        {data.first.image}
        <ItemText>{data.first.text}</ItemText>
      </RowItem>
      <RowItem>
        {data.second.image}
        <ItemText>{data.second.text}</ItemText>
      </RowItem>
    </RowContainer>
  );
};

function OurService() {
  const data = [
    {
      first: {
        image: <DataPhone />,
        text: "We've got all the insurance markets in your device",
      },
      second: {
        image: <GraphMan />,
        text: "Short, easy-to-read information about the best providers with the most affordable rates",
      },
    },
    {
      first: {
        image: <VersionControl />,
        text: "Our algorithm analyze and provide personalized plan options based on your needs and budget",
      },
      second: {
        image: <WorkOnline />,
        text: "Our helpful customer service agents who are ready to answer any questions you might have",
      },
    },
  ];
  return (
    <>
      <SectionContainer>
        <div className="gradientsSection">
          <div className="circle blue"></div>
        </div>

        <SectionWrapper>
          <SectionHeading>
            <SectionHeadingTitle>
              The best, <BlueColor> all-in-one</BlueColor> insurance platform
            </SectionHeadingTitle>
            <SectionHeadingText>
              We know what challenges you might face if searching for the
              perfect health insurance. That&apos;s why our experts encourage
              health care seekers to explore all of your options with us, so
              that we can provide you with the most personalized plan possible.
            </SectionHeadingText>
          </SectionHeading>
          <SectionContent>
            {data.map((item, index) => (
              <FlexRow data={item} key={index} />
            ))}
          </SectionContent>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
}

export default OurService;
