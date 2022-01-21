import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

import Menu from "./Menu";
import OverlayContainer from "../Layout/Overlay";
import siteBrandLight from "../../assets/image/logo/logo-white.png";
import siteBrandDark from "../../assets/image/logo/logo-black.png";

const ToggleHolder = styled.div`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  @media (min-width: 992px) {
    display: none;
  }
`;
const MobileToggle = styled.div`
  display: inline-flex;
  width: 30px;
  height: 18px;
  align-items: center;
  transition: none;
  vertical-align: middle;
  position: relative;

  & span:nth-child(1) {
    top: -2px;
  }
  & span:nth-child(2) {
    top: 7px;
  }
  & span:nth-child(3) {
    top: 16px;
  }
`;
const ToggleBar = styled.span`
  position: absolute;
  width: 25px;
  height: 3px;
  background: #1e88e5;
  content: " ";
  left: 0;
`;
const SiteNavbar = ({ buttonBlock, darkLogo, siteLogoUrl }) => {
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);
  const handleOpenMenuMobile = () => {
    setMenuMobileIsOpen(true);
  };
  const handleCloseMenuMobile = () => {
    setMenuMobileIsOpen(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">
          {siteLogoUrl ? (
            <img src={siteLogoUrl} alt="site-brand" />
          ) : (
            <img
              src={darkLogo ? siteBrandDark : siteBrandLight}
              alt="site-brand"
            />
          )}
        </Navbar.Brand>
        <Menu />
        {buttonBlock}
        <ToggleHolder onClick={handleOpenMenuMobile}>
          <MobileToggle>
            <ToggleBar />
            <ToggleBar />
            <ToggleBar />
          </MobileToggle>
        </ToggleHolder>
      </Navbar>
      <OverlayContainer
        isOpenMenu={menuMobileIsOpen}
        onClose={handleCloseMenuMobile}
      />
    </>
  );
};

export default SiteNavbar;
