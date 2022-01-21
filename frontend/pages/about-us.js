import { NextSeo } from "next-seo";

// Custom Components
import {
  BannerSection,
  ContentSectionOne,
  ContentSectionTwo,
  TeamSection,
} from "../sections/about";
import { FooterSection } from "../sections/InnerPages";

import Link from "../components/Link";
import PageWrapper from "../components/PageWrapper";

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

const About = () => {
  return (
    <>
      <NextSeo
        title="Insurance Headquarters | Find Your Health Insurance Affordable"
        description="Insurance Headquarters is a leading destination for people searching for health insurance. Get the latest information on coverage, providers and costs."
      />
      <PageWrapper headerConfig={Header} HeaderButton={<HeaderButton />}>
        <BannerSection />
        <ContentSectionOne />
        <ContentSectionTwo />
        <TeamSection className="about-us-temam-area" />
        <FooterSection />
      </PageWrapper>
    </>
  );
};

export default About;
