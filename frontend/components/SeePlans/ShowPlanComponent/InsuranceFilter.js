import styled from "styled-components";
import FilterIcon from "../../../assets/icons/Filter";
import DropDownIcon from "../../../assets/icons/DropDown";
import { useState, useEffect } from "react";
import Link from "next/link";
import CloseIcon from "../../../assets/icons/Close";

const FilterSidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  overflow: scroll;
  width: clamp(340px, 45vw + 1rem, 400px);
  height: 100vh;
  border-right: 1px solid #e3f2fd;
  transform: translateX(-100%);
  background: #fff;
  transition: transform 0.3s ease;
  overflow-x: hidden;

  &.active {
    transition-delay: 0.2s;
    transform: translateX(0);
  }
`;
const FilterSidebarHeader = styled.header`
  background: #fff;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;
const FilterSidebarTitle = styled.a`
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
const FilterInner = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
`;
const FilterSidebarNavigation = styled.ul`
  line-height: 1;
  margin: 0 0 20px;
  list-style: none;
`;
const FilterSidebarItem = styled.li`
  border-bottom: 1px solid #eee;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
  transition-delay: calc(0.05s * (5 - var(--i)));

  &.active {
    transition-delay: calc(0.1s * var(--i) + 0s);
    opacity: 1;
  }
`;
const FilterSidebarNavigationLink = styled.a`
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

const FilterSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <FilterSidebarContainer className={isOpen ? "active" : null}>
        <FilterSidebarHeader>
          <FilterSidebarTitle>Insurance Headquarter</FilterSidebarTitle>
          <CloseButtonWrapper>
            <CloseButtonContainer onClick={onClose}>
              <CloseIcon />
            </CloseButtonContainer>
          </CloseButtonWrapper>
        </FilterSidebarHeader>
        <FilterInner>
          <div>
            <FilterSidebarNavigation>
              <FilterSidebarItem
                style={{ "--i": 1 }}
                className={isOpen ? "active" : null}
              >
                <FilterSidebarNavigationLink>
                  Monthly premium
                </FilterSidebarNavigationLink>
              </FilterSidebarItem>
              <FilterSidebarItem
                style={{ "--i": 2 }}
                className={isOpen ? "active" : null}
              >
                <FilterSidebarNavigationLink>
                  Maximum yearly deductible
                </FilterSidebarNavigationLink>
              </FilterSidebarItem>
              <FilterSidebarItem
                style={{ "--i": 3 }}
                className={isOpen ? "active" : null}
              >
                <FilterSidebarNavigationLink>
                  Health plan categories
                </FilterSidebarNavigationLink>
              </FilterSidebarItem>
              <FilterSidebarItem
                style={{ "--i": 4 }}
                className={isOpen ? "active" : null}
              >
                <FilterSidebarNavigationLink>
                  Health plan types
                </FilterSidebarNavigationLink>
              </FilterSidebarItem>
            </FilterSidebarNavigation>
          </div>
        </FilterInner>
      </FilterSidebarContainer>
    </>
  );
};

const ClickCapture = styled.div`
  background-image: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.2)
  );
  z-index: 9999;
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
      <FilterSidebar isOpen={isOpenMenu} onClose={onClose} />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto 0.75rem;
`;
const FilterLink = styled.a`
  & > svg {
    margin-right: 5px;
  }
`;
const SortingLink = styled.a`
  & > svg {
    margin-left: 5px;
  }
`;
const SortingSelect = styled.select`
  border: none;
  outline: none;
  appearance: none;
  height: 0.95rem;
  line-height: 0.95rem;
  font-size: 0.95rem;
  font-weight: 300;
`;

function InsuranceFilter({ informations, onFilterChange }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <Wrapper>
        <FilterLink onClick={toggleMenu}>
          <FilterIcon />
          <span>Filter</span>
        </FilterLink>
        <SortingLink>
          <SortingSelect
            defaultValue={informations.filter.sort}
            onChange={(e) =>
              onFilterChange({ ...informations.filter, sort: e.target.value })
            }
          >
            <option value="premium">Lowest Premium</option>
            <option value="deductible">Lowest Deductible</option>
          </SortingSelect>
          <DropDownIcon />
        </SortingLink>
      </Wrapper>
      <OverlayContainer isOpenMenu={isOpenMenu} onClose={toggleMenu} />
    </>
  );
}

export default InsuranceFilter;
