import styled from "styled-components";

import BlueCrossColor from "../../../assets/supplierLogo/color/BlueCross";
import Ambetter from "../../../assets/supplierLogo/color/Ambetter";
import Oscar from "../../../assets/supplierLogo/color/Oscar";
import UnitedHealthcare from "../../../assets/supplierLogo/color/UnitedHealthcare";
import MolinaHealthcare from "../../../assets/supplierLogo/color/Molina";
import CignaHealthcare from "../../../assets/supplierLogo/color/Cigna";
import BrightHealth from "../../../assets/supplierLogo/color/BrightHealth";

export const getMetalProps = (metal_level) => {
  switch (metal_level) {
    case "Bronze":
      return {
        text: "Bronze",
        color: "#724536",
        background: "#FEF0EA",
      };
    case "Silver":
      return {
        text: "Silver",
        color: "#4e5259",
        background: "#f8f9fa",
      };
    case "Gold":
      return {
        text: "Gold",
        color: "#8A6F0F",
        background: "#fffef0",
      };
    default:
      return {};
  }
};
export const getIssuerLogo = (issuerName) => {
  switch (true) {
    case issuerName.includes("Ambetter"):
      return <Ambetter />;
    case issuerName.includes("AvMed"):
      return <BlueCrossColor />;
    case issuerName.includes("BlueCross"):
      return <BlueCrossColor />;
    case issuerName.includes("Oscar"):
      return <Oscar />;
    case issuerName === "UnitedHealthcare":
      return <UnitedHealthcare />;
    case issuerName === "Molina Healthcare":
      return <MolinaHealthcare />;
    case issuerName === "Cigna Healthcare":
      return <CignaHealthcare />;
    case issuerName === "Bright HealthCare":
      return <BrightHealth />;
    default:
      console.warn("No issuer logo found for " + issuerName);
  }
};

const CardWrapper = styled.label`
  max-width: 400px;
  width: 100%;
  cursor: pointer;
  margin: 0 auto 20px auto;
`;
const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  border-radius: 15px;
  transition: box-shadow 0.4s, border 0.2s;
  border: 2px solid #e1e2e7;
  position: relative;
  height: 100%;
  box-shadow: 0px 3px 10px 0px #e8e8e8;
`;
const CardInputRadio = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${CardContainer} {
    box-shadow: 0px 3px 10px 0px #e8e8e8;
    border: 2px solid #216ee0;
    background: #eaf1fe;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoContainer = styled(FlexContainer)`
  & > svg {
    width: 66px;
  }
`;
const InsuranceType = styled.p`
  color: #a7aaaf;
  font-size: 0.75rem;
  line-height: 1.25rem;
`;
const InsuranceMetal = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) => props.metalProps?.color};
  background: ${(props) => props.metalProps?.background};
  padding: 0.25rem 1rem;
  border-radius: 15px;
  margin-left: 10px;
`;
const CardTitle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
`;
const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #7c8087;
`;
const DeductibleAmount = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  font-weight: 600;
`;
const PremiumPrice = styled.span`
  color: #b9babe;
  letter-spacing: 0.5px;
  text-decoration: line-through;
`;
const PremiumWithCredit = styled.span`
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 800;
  color: #207ad2;
  margin-left: 10px;
`;

const InsuranceCard = ({
  selectedPlanDetail,
  onSelectPlan,
  id,
  name,
  metal_level,
  deductibles,
  type,
  premium,
  premium_w_credit,
  issuer,
}) => {
  var metalProps = getMetalProps(metal_level);
  var issuerLogo = getIssuerLogo(issuer.name);

  return (
    <>
      <CardWrapper>
        <CardInputRadio
          type="radio"
          name="insuranceCard"
          value={id}
          checked={selectedPlanDetail === id || false}
          onChange={onSelectPlan}
        />
        <CardContainer>
          <CardRow>
            <LogoContainer>{issuerLogo}</LogoContainer>
            <FlexContainer>
              <InsuranceType>{type}</InsuranceType>
              <InsuranceMetal metalProps={metalProps}>
                {metalProps.text}
              </InsuranceMetal>
            </FlexContainer>
          </CardRow>
          <CardRow>
            <CardTitle>{name.replace(/\([^)]+\)/g, "")}</CardTitle>
          </CardRow>
          <CardRow>
            <CardDescription>Deductible</CardDescription>
            <DeductibleAmount>
              $
              {deductibles[0]?.amount
                ?.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </DeductibleAmount>
          </CardRow>
          <CardRow
            style={{
              borderTop: "1px solid #F5F6F8",
              paddingTop: "5px",
              margin: "0",
            }}
          >
            <CardDescription>Premium</CardDescription>
            <FlexContainer>
              <PremiumPrice>
                ${premium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </PremiumPrice>
              <PremiumWithCredit>
                $
                {premium_w_credit
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </PremiumWithCredit>
            </FlexContainer>
          </CardRow>
        </CardContainer>
      </CardWrapper>
    </>
  );
};

export default InsuranceCard;
