import { NextSeo } from "next-seo";

// Custom Components
import Link from "../components/Link";
import PageWrapper from "../components/PageWrapper";
import {
  HeroSection,
  FeatureSection,
  ContentSectionOne,
  ContentSectionTwo,
  TeamSection,
  TestimonialSection,
  Clients,
} from "../sections/landing";
import { FooterSection } from "../sections/InnerPages";

const Header = {
  headerClasses: "site-header--menu-end site-header--sticky light-header",
  containerFluid: true,
  darkLogo: true,
};

const HeaderButton = () => {
  return (
    <div className="header-btn header-btn--l4 d-none ms-auto d-xs-inline-flex">
      <Link className="btn send-request-btn focus-reset" to="seePlans">
        Get A Quote
      </Link>
    </div>
  );
};
const Telemedecine = () => {
  return (
    <>
      <NextSeo
        title="Insurance Headquarters | Find Your Health Insurance Affordable"
        description="Insurance Headquarters is a leading destination for people searching for health insurance. Get the latest information on coverage, providers and costs."
      />
      <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton />}>
        <HeroSection />
        <FeatureSection />
        <ContentSectionOne />
        {/* <ContentSectionTwo /> */}
        <TeamSection />
        <TestimonialSection />
        <Clients />
        <FooterSection />
      </PageWrapper>
    </>
  );
};

export default Telemedecine;
