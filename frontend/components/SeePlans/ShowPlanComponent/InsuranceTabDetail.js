import styled from "styled-components";
import CloseIcon from "../../../assets/icons/Close";
import HeartIcon from "../../../assets/icons/Heart";
import ShareIcon from "../../../assets/icons/Share";
import { getIssuerLogo, getMetalProps } from "./InsuranceCard";
import Link from "next/link";

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  max-width: 800px;
  padding 10%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const TabRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoContainer = styled(FlexContainer)`
  & > svg {
    width: 115px;
  }
`;
const InsuranceType = styled.p`
  color: #a7aaaf;
  font-size: 1rem;
  line-height: 1.25rem;
`;
const InsuranceMetal = styled.p`
  font-size: 1rem;
  color: ${(props) => props.metalProps?.color};
  background: ${(props) => props.metalProps?.background};
  padding: 0.5rem 1.5rem;
  border-radius: 1.25rem;
  margin-left: 10px;
`;
const IssuerName = styled.p`
  font-size: 1rem;
  color: #7c8087;
  line-height: 1rem;
`;
const TabTitle = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.25rem;
`;
const TabImportantDescription = styled.a`
  color: #25272e;
  font-size: 1rem;
  position: relative;
  background-image: linear-gradient(
    to right,
    #90caf9 25%,
    transparent 25%,
    #90caf9 25%,
    transparent 25%
  );
  background-position: 3px 1.4rem;
  background-repeat: repeat-x;
  background-size: 8px 2px;
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
const DeductibleAmount = styled.span`
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 700;
`;
const CommonCostItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  height: 100%;
  padding: 2rem;
  background: rgba(227, 242, 253, 0.5);

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }
`;
const CommonCostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  padding: 1rem 0;

  & > ${CommonCostItem}:nth-child(1) {
    border-radius: 20px 0 0 0;
  }
  & > ${CommonCostItem}:nth-child(2) {
    border-radius: 0 20px 0 0;
  }
  & > ${CommonCostItem}:nth-child(3) {
    border-radius: 0 0 0 20px;
  }
  & > ${CommonCostItem}:nth-child(4) {
    border-radius: 0 0 20px 0;
  }
`;
const CommonCostTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CommonCostDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.25rem;
  font-weight: 800;
  text-align: left;
`;
const PlanFeatureText = styled.div`
  display: inline-block;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const PlanFeatureRow = styled(TabRow)`
  justify-content: left;
  align-items: center;
  gap: 5px;
  color: #03948c;
  padding: 0 1rem;
`;
const MoreInfoLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: 400;
  color: #7c8087;
`;
const ActionButton = styled.div`
  cursor: pointer;
`;
const CheckmarkIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.86373 2.74731C10.0124 2.89472 10.0991 3.09801 10.1049 3.31249C10.1107 3.52697 10.0351 3.73509 9.89459 3.89107L5.52239 8.74667C5.45153 8.82522 5.36638 8.88808 5.27197 8.93154C5.17755 8.97499 5.07579 8.99816 4.9727 8.99966C4.8696 9.00117 4.76727 8.98099 4.67173 8.94032C4.5762 8.89965 4.48941 8.8393 4.41648 8.76285L2.10179 6.33506C1.9655 6.18165 1.89131 5.97874 1.89483 5.76909C1.89836 5.55943 1.97934 5.3594 2.1207 5.21112C2.26206 5.06285 2.45278 4.97792 2.65267 4.97422C2.85255 4.97052 3.04601 5.04835 3.19227 5.19129L4.94629 7.02994L8.77325 2.77968C8.91379 2.62376 9.10761 2.53276 9.3121 2.52669C9.51659 2.52062 9.71501 2.59998 9.86373 2.74731Z"
        fill="#03948C"
      />
    </svg>
  );
};
const XIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.20966 2.20966C2.34395 2.07542 2.52606 2 2.71594 2C2.90582 2 3.08793 2.07542 3.22222 2.20966L5.75432 4.74177L8.28643 2.20966C8.42149 2.07922 8.60237 2.00704 8.79013 2.00867C8.97789 2.01031 9.15749 2.08562 9.29026 2.21839C9.42303 2.35115 9.49834 2.53076 9.49997 2.71852C9.5016 2.90627 9.42943 3.08716 9.29898 3.22222L6.76688 5.75432L9.29898 8.28643C9.42943 8.42149 9.5016 8.60237 9.49997 8.79013C9.49834 8.97789 9.42303 9.15749 9.29026 9.29026C9.15749 9.42303 8.97789 9.49834 8.79013 9.49997C8.60237 9.5016 8.42149 9.42943 8.28643 9.29898L5.75432 6.76688L3.22222 9.29898C3.08716 9.42943 2.90627 9.5016 2.71852 9.49997C2.53076 9.49834 2.35115 9.42303 2.21839 9.29026C2.08562 9.15749 2.01031 8.97789 2.00867 8.79013C2.00704 8.60237 2.07922 8.42149 2.20966 8.28643L4.74177 5.75432L2.20966 3.22222C2.07542 3.08793 2 2.90582 2 2.71594C2 2.52606 2.07542 2.34395 2.20966 2.20966V2.20966Z"
        fill="#f94144"
      />
    </svg>
  );
};

export default function InsuranceTabDetail({
  planID = "",
  name,
  metal_level,
  deductibles,
  type,
  premium,
  premium_w_credit,
  issuer,
  moops, // out of pocket max
  benefits,
  benefits_url,
  brochure_url,
  formulary_url,
  network_url,
  onCloseTab,
}) {
  var metalProps = getMetalProps(metal_level);
  var issuerLogo = getIssuerLogo(issuer.name);

  const getDisplayStringBenefits = (benefit) => {
    var copay_amount = benefit.cost_sharings.filter(
      (item) => item.network_tier === "In-Network"
    )[0].copay_amount;
    var coinsurance_rate = benefit.cost_sharings.filter(
      (item) => item.network_tier === "In-Network"
    )[0].coinsurance_rate;
    if (copay_amount !== 0) {
      return `$${copay_amount}`;
    }
    if (coinsurance_rate !== 0) {
      return `${coinsurance_rate * 100}%`;
    }
    if (coinsurance_rate === 0 && copay_amount === 0) {
      return "Free";
    }
  };

  const commonBenefits = benefits.reduce(
    (totalBenefits, benefit) => {
      if (benefit.name === "Specialist Visit") {
        totalBenefits.specialistVisit = getDisplayStringBenefits(benefit);
      } else if (benefit.name === "Emergency Room Services") {
        totalBenefits.emergencyRoom = getDisplayStringBenefits(benefit);
      } else if (benefit.name === "Generic Drugs") {
        totalBenefits.genericDrugs = getDisplayStringBenefits(benefit);
      } else if (
        benefit.name === "Primary Care Visit to Treat an Injury or Illness"
      ) {
        totalBenefits.primaryCare = getDisplayStringBenefits(benefit);
      } else if (
        benefit.name.includes("Dental") &&
        benefit.name.includes("Child")
      ) {
        totalBenefits.dentalChild.push(benefit.name);
      } else if (
        benefit.name.includes("Dental") &&
        benefit.name.includes("Adult")
      ) {
        totalBenefits.dentalAdult.push(benefit.name);
      }
      return totalBenefits;
    },
    { dentalAdult: [], dentalChild: [] }
  );

  return (
    <>
      <TabContainer>
        <TabRow
          style={{
            position: "relative",
            top: "-1.75rem",
            left: "-1.75rem",
            width: "calc(100% + 3.5rem)",
          }}
        >
          <ActionButton onClick={onCloseTab}>
            <CloseIcon />
          </ActionButton>
          <FlexContainer style={{ gap: "5px" }}>
            <ActionButton>
              <HeartIcon />
            </ActionButton>
            <ActionButton>
              <ShareIcon />
            </ActionButton>
          </FlexContainer>
        </TabRow>
        <TabRow style={{ alignItems: "flex-start" }}>
          <LogoContainer>{issuerLogo}</LogoContainer>
          <FlexContainer>
            <InsuranceType>{type}</InsuranceType>
            <InsuranceMetal metalProps={metalProps}>
              {metalProps.text}
            </InsuranceMetal>
          </FlexContainer>
        </TabRow>
        <TabRow>
          <IssuerName>{issuer.name.replace(/\([^)]+\)/g, "")}</IssuerName>
        </TabRow>
        <TabRow>
          <TabTitle>{name.replace(/\([^)]+\)/g, "")}</TabTitle>
        </TabRow>
        <TabRow
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "rgba(227, 242, 253, 0.5)",
            borderRadius: "10px",
          }}
        >
          <TabImportantDescription>Premium</TabImportantDescription>
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
        </TabRow>
        <TabRow style={{ padding: "1rem", borderBottom: "1px solid #F6F7F8" }}>
          <TabImportantDescription tooltipContent={true}>
            Deductible
          </TabImportantDescription>
          <DeductibleAmount>
            $
            {deductibles[0]?.amount
              ?.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </DeductibleAmount>
        </TabRow>
        <TabRow style={{ padding: "1rem", borderBottom: "1px solid #F6F7F8" }}>
          <TabImportantDescription>Out-of-pocket max</TabImportantDescription>
          <DeductibleAmount>
            ${moops[0]?.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </DeductibleAmount>
        </TabRow>
        <TabRow style={{ marginTop: "1rem" }}>
          <TabTitle>Plan Features</TabTitle>
        </TabRow>
        {commonBenefits.dentalAdult.length > 0 ? (
          commonBenefits.dentalAdult.map((item, index) => (
            <PlanFeatureRow key={index}>
              <CheckmarkIcon />
              <PlanFeatureText>{item}</PlanFeatureText>
            </PlanFeatureRow>
          ))
        ) : (
          <PlanFeatureRow>
            <XIcon />
            <PlanFeatureText style={{ color: "#f94144" }}>
              Adult Dental
            </PlanFeatureText>
          </PlanFeatureRow>
        )}
        {commonBenefits.dentalChild.length > 0 ? (
          commonBenefits.dentalChild.map((item, index) => (
            <PlanFeatureRow key={index}>
              <CheckmarkIcon />
              <PlanFeatureText>{item}</PlanFeatureText>
            </PlanFeatureRow>
          ))
        ) : (
          <PlanFeatureRow>
            <XIcon />
            <PlanFeatureText style={{ color: "#f94144" }}>
              Child Dental
            </PlanFeatureText>
          </PlanFeatureRow>
        )}
        <div style={{ margin: "1rem 0", borderBottom: "1px solid #F6F7F8" }} />
        <TabRow>
          <TabTitle>Common Costs</TabTitle>
        </TabRow>
        <CommonCostContainer>
          <CommonCostItem>
            <CommonCostTitle>Specialist Visit</CommonCostTitle>
            <CommonCostDescription>
              {commonBenefits?.specialistVisit}
            </CommonCostDescription>
          </CommonCostItem>
          <CommonCostItem>
            <CommonCostTitle>Emergency Room</CommonCostTitle>
            <CommonCostDescription>
              {commonBenefits?.emergencyRoom}
            </CommonCostDescription>
          </CommonCostItem>
          <CommonCostItem>
            <CommonCostTitle>Generic Drugs</CommonCostTitle>
            <CommonCostDescription>
              {commonBenefits?.genericDrugs}
            </CommonCostDescription>
          </CommonCostItem>
          <CommonCostItem>
            <CommonCostTitle>Primary Care</CommonCostTitle>
            <CommonCostDescription>
              {commonBenefits?.primaryCare}
            </CommonCostDescription>
          </CommonCostItem>
        </CommonCostContainer>
        <div
          style={{ margin: "1rem 0 2rem 0", borderBottom: "1px solid #F6F7F8" }}
        />
        <TabRow>
          <TabTitle>More Informations</TabTitle>
        </TabRow>
        {benefits_url && (
          <TabRow>
            <Link href={benefits_url} passHref>
              <MoreInfoLink>Summary of benefits and coverages</MoreInfoLink>
            </Link>
          </TabRow>
        )}
        {brochure_url && (
          <TabRow>
            <Link href={brochure_url} passHref>
              <MoreInfoLink>Issuer brochure</MoreInfoLink>
            </Link>
          </TabRow>
        )}
        {formulary_url && (
          <TabRow>
            <Link href={formulary_url} passHref>
              <MoreInfoLink>Pharmacy Resources</MoreInfoLink>
            </Link>
          </TabRow>
        )}
        {network_url && (
          <TabRow>
            <Link href={network_url} passHref>
              <MoreInfoLink>Find nearby in-network care</MoreInfoLink>
            </Link>
          </TabRow>
        )}
      </TabContainer>
    </>
  );
}
