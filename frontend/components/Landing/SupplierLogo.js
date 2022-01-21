import styled from "styled-components";
import { BPSmall, BPMedium, BPMobileM } from "../Layout/BreakPoint";
import CrossBlueLogo from "../../assets/supplierLogo/gray/Blue";
import AmbetterLogo from "../../assets/supplierLogo/gray/Ambetter";
import OscarLogo from "../../assets/supplierLogo/gray/Oscar";
import UnitedHealthLogo from "../../assets/supplierLogo/gray/UnitedHealth";

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
  border-top: 2px solid #f8f5f1;
  border-bottom: 2px solid #f8f5f1;
  padding: 6rem 2rem;

  @media (max-width: ${BPSmall}) {
    padding: 4rem 2rem;
    width: 100%;
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
const SupplierContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const LogoItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: ${BPMedium}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
  @media (max-width: ${BPMobileM}) {
    grid-template-columns: 1fr;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  @media (max-width: 600px) {
    width: 150px;
  }
`;

function SupplierLogo() {
  return (
    <>
      <SectionContainer>
        <div className="gradientsSection">
          <div className="circle blue"></div>
        </div>
        <SectionWrapper>
          <SectionHeading>
            <SectionHeadingTitle>
              All <BlueColor>carriers</BlueColor>, in one platform
            </SectionHeadingTitle>
            <SectionHeadingText>
              When you’re on the hunt for the best health insurance, you face
              some tough choices. Let us help you find one that fits your needs
              from our carriers!
            </SectionHeadingText>
          </SectionHeading>
          <SupplierContainer>
            <LogoContainer>
              <LogoItemContainer>
                <FlexContainer>
                  <CrossBlueLogo />
                </FlexContainer>
                <FlexContainer>
                  <AmbetterLogo />
                </FlexContainer>
                <FlexContainer>
                  <OscarLogo />
                </FlexContainer>
                <FlexContainer>
                  <UnitedHealthLogo />
                </FlexContainer>
              </LogoItemContainer>
            </LogoContainer>
          </SupplierContainer>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
}

export default SupplierLogo;
