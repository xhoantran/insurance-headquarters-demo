import { useState, useEffect } from "react";
import styled from "styled-components";
import { BPSmall } from "./BreakPoint";
import Link from "next/link";
import CloseIcon from "../../assets/icons/Close";

const MobileMenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 60;
  overflow: scroll;
  width: 300px;
  max-width: 100%;
  border-right: 1px solid #e3f2fd;
  transform: translateX(-100%);
  background: #fff;
  top: 0;
  transition: transform 0.3s ease;
  transition-delay: 0.3s;
  overflow-x: hidden;

  @media only screen and (min-width: ${BPSmall}) {
    width: 340px;
  }

  &.active {
    transition-delay: 0.2s;
    transform: translateX(0);
  }
`;
const MobileMenuHeader = styled.header`
  background: #fff;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;
const MobileMenuTitle = styled.a`
  display: inline-flex;
  flex: 0 0 75%;
  max-width: 75%;
  color: #1976d2;
  font-weight: 600;
`;
const CloseButtonWrapper = styled.div`
  display: inline-flex;
  flex: 0 0 25%;
  max-width: 25%;
  align-items: center;
  justify-content: center;
`;
const CloseButtonContainer = styled.div`
  margin-left: auto;
`;
const MobileMenuInner = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
`;
const MobileMenuNavigation = styled.ul`
  line-height: 1;
  margin: 0 0 20px;
  padding: 0;
  list-style: none;
`;
const MobileMenuItem = styled.li`
  border-bottom: 1px solid #eee;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  transition-delay: calc(0.05s * (5 - var(--i)));

  &.active {
    transition-delay: calc(0.1s * var(--i) + 0s);
    opacity: 1;
  }
`;
const MobileMenuNavigationLink = styled.a`
  display: flex;
  align-items: center;
  text-transform: none;
  font-size: 14px;
  font-weight: 600;
  padding: 15px 0;
  line-height: 1;
  transition: none;
  color: #162d5a;
`;
const MobileLoginMenu = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  list-style: none;
  line-height: 1;
  padding: 0 10px;
`;
const MobileLoginItem = styled.li`
  opacity: 0;
  transition: opacity 0.3s ease;
  transition-delay: 0.1s;

  &.active {
    transition-delay: 0.6s;
    opacity: 1;
  }
`;
const MobileLoginItemLink = styled.a`
  font-size: 14px;
  line-height: 1;
  color: #2196f3;
  transition: none;
  min-height: 0;
  display: flex;
  align-items: center;
  font-weight: 600;
  padding: 15px 20px;
  transition: none;
`;
const MobileGetAQuoteItemLink = styled.a`
  font-size: 14px;
  line-height: 1;
  padding: 7px 0;
  color: #fff;
  background-color: #2196f3;
  transition: none;
  min-height: 0;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: none;
  padding: 15px 20px;
  border-radius: 25px;
`;

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <MobileMenuContainer className={isOpen ? "active" : null}>
        <MobileMenuHeader>
          <MobileMenuTitle>Insurance Headquarter</MobileMenuTitle>
          <CloseButtonWrapper>
            <CloseButtonContainer onClick={onClose}>
              <CloseIcon />
            </CloseButtonContainer>
          </CloseButtonWrapper>
        </MobileMenuHeader>
        <MobileMenuInner>
          <div>
            <MobileMenuNavigation>
              <MobileMenuItem
                style={{ "--i": 1 }}
                className={isOpen ? "active" : null}
              >
                <Link href="/">
                  <MobileMenuNavigationLink>
                    Get Insured
                  </MobileMenuNavigationLink>
                </Link>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 2 }}
                className={isOpen ? "active" : null}
              >
                <Link href="/shop/">
                  <MobileMenuNavigationLink>
                    Insurance Resources
                  </MobileMenuNavigationLink>
                </Link>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 3 }}
                className={isOpen ? "active" : null}
              >
                <MobileMenuNavigationLink>Help</MobileMenuNavigationLink>
              </MobileMenuItem>
              <MobileMenuItem
                style={{ "--i": 4 }}
                className={isOpen ? "active" : null}
              >
                <MobileMenuNavigationLink>Blog</MobileMenuNavigationLink>
              </MobileMenuItem>
            </MobileMenuNavigation>
            <MobileLoginMenu>
              <MobileLoginItem className={isOpen ? "active" : null}>
                <MobileLoginItemLink>Login</MobileLoginItemLink>
              </MobileLoginItem>
              <MobileLoginItem className={isOpen ? "active" : null}>
                <Link href="/see-plans/">
                  <MobileGetAQuoteItemLink>Get A Quote</MobileGetAQuoteItemLink>
                </Link>
              </MobileLoginItem>
            </MobileLoginMenu>
          </div>
        </MobileMenuInner>
      </MobileMenuContainer>
    </>
  );
};

const ClickCapture = styled.div`
  background-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.2)
  );
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0.1s;
`;

const OverlayContainer = ({ isOpenMenu, onClose }) => {
  const [ClickCaptureStyle, setClickCaptureStyle] = useState({
    opacity: 0,
    visibility: "hidden",
    pointerEvents: "none",
  });

  useEffect(() => {
    if (isOpenMenu) {
      setClickCaptureStyle({
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
      });
    } else {
      setClickCaptureStyle({
        opacity: 0,
        pointerEvents: "none",
      });
      setTimeout(() => {
        setClickCaptureStyle({
          visibility: "hidden",
        });
      }, 400);
    }
  }, [isOpenMenu]);

  return (
    <>
      <ClickCapture
        onClick={onClose}
        style={{
          opacity: ClickCaptureStyle.opacity,
          visibility: ClickCaptureStyle.visibility,
          pointerEvents: ClickCaptureStyle.pointerEvents,
        }}
      />
      <MobileMenu isOpen={isOpenMenu} onClose={onClose} />
    </>
  );
};

export default OverlayContainer;
