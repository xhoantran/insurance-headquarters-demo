import styled from "styled-components";
import { BPMedium, BPSmall } from "./BreakPoint";
import FacebookIcon from "../../assets/icons/Facebook";
import YoutubeIcon from "../../assets/icons/Youtube";
import TwitterIcon from "../../assets/icons/Twitter";

const FooterWrapper = styled.footer`
  background: #0d47a1;
  padding: 45px 0;

  @media (min-width: ${BPSmall}) {
    padding: 60px 0;
  }

  @media (min-width: ${BPMedium}) {
    padding: 75px 0;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${BPSmall}) {
    padding: 0 15px;
  }
`;

const FooterElement = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 1rem;
  color: #fff;
  @media (min-width: ${BPSmall}) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: ${BPMedium}) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
const FooterMenu = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
`;
const FooterMenuItem = styled.li`
  margin-bottom: 0.5rem;
`;
const FooterMenuItemLink = styled.a`
  color: #ffffff;
`;
const FooterMenuHeader = styled.a`
  font-weight: 600;
  color: #ffffff;
`;
const LogoContainer = styled.h3`
  margin-bottom: 2rem;
`;
const SocialMediaContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const SocialMeidaIcon = styled.a`
  margin: auto 6px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterElement>
          <LogoContainer>Insurance Headquarter</LogoContainer>
        </FooterElement>
        <FooterElement>
          <FooterMenu>
            <FooterMenuItem>
              <FooterMenuHeader>About</FooterMenuHeader>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>For employees</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>For partners</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Affiliates</FooterMenuItemLink>
            </FooterMenuItem>
          </FooterMenu>
        </FooterElement>
        <FooterElement>
          <FooterMenu>
            <FooterMenuItem>
              <FooterMenuHeader>Legal</FooterMenuHeader>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Privacy Policy</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Terms of Use</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>Contact Us</FooterMenuItemLink>
            </FooterMenuItem>
            <FooterMenuItem>
              <FooterMenuItemLink>FAQ</FooterMenuItemLink>
            </FooterMenuItem>
          </FooterMenu>
        </FooterElement>
        <FooterElement>
          <FooterMenu>
            <FooterMenuItem>
              <FooterMenuHeader>Get In Touch</FooterMenuHeader>
            </FooterMenuItem>
            <FooterMenuItem>
              <SocialMediaContainer>
                <SocialMeidaIcon>
                  <FacebookIcon />
                </SocialMeidaIcon>
                <SocialMeidaIcon>
                  <YoutubeIcon />
                </SocialMeidaIcon>
                <SocialMeidaIcon>
                  <TwitterIcon />
                </SocialMeidaIcon>
              </SocialMediaContainer>
            </FooterMenuItem>
          </FooterMenu>
        </FooterElement>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
