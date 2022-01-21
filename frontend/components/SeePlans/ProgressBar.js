import styled from "styled-components";
import Link from "next/link";
import { S1GetStartedURL, S2LocationURL, S3HouseholdURL } from "./Url";

const StepperWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 432px;
  align-self: end;
  width: clamp(80%, 80% + 1rem, 100%);
`;
const StepCounter = styled.div`
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e8e8e8;
  margin-bottom: 10px;
`;
const StepCounterInner = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 34px;
  background: white;
  color: #c8c8c8;
  font-weight: 700;
`;
const StepName = styled.div`
  color: #b4b4b4;
  font-size: 0.7rem;
  @media (max-width: 1024px) {
    font-size: 0.6rem;
  }
`;
const StepperItem = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  font-weight: 600;
  color: #e8e8e8;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  &:first-child::before,
  &:last-child::after {
    content: none;
  }

  &::before {
    position: absolute;
    content: "";
    border-bottom: 4px solid #e8e8e8;
    width: 100%;
    top: 18px;
    left: -50%;
    z-index: 2;
  }

  &.completed::after {
    position: absolute;
    content: "";
    border-bottom: 4px solid #1e88e5;
    width: 100%;
    top: 18px;
    left: 50%;
    z-index: 3;
    transition: all 0.3s ease-in-out;
  }
  &.completed ${StepCounter}, &.active ${StepCounter} {
    background: linear-gradient(#1976d2, #2196f3);
  }
  &.completed ${StepName}, &.active ${StepName} {
    color: #1e88e5;
  }
  &.active ${StepCounterInner} {
    color: #1e88e5;
  }
  &.completed ${StepCounterInner} {
    color: #fff;
    background: none;
  }

  // ---------------Link Hover---------------
  &.completed {
    cursor: pointer;
    pointer-events: all;
  }
  &.completed:hover ${StepName} {
    text-decoration: underline;
  }
`;

function ProgressBar({ active = 1 }) {
  return (
    <>
      <StepperWrapper>
        <Link href={S1GetStartedURL} passHref>
          <StepperItem className={active === 1 ? "active" : "completed"}>
            <StepCounter>
              <StepCounterInner>1</StepCounterInner>
            </StepCounter>
            <StepName>Get Started</StepName>
          </StepperItem>
        </Link>

        <Link href={S2LocationURL} passHref>
          <StepperItem
            className={
              active < 2 ? null : active === 2 ? "active" : "completed"
            }
          >
            <StepCounter>
              <StepCounterInner>2</StepCounterInner>
            </StepCounter>
            <StepName>Location</StepName>
          </StepperItem>
        </Link>

        <Link href={S3HouseholdURL} passHref>
          <StepperItem
            className={
              active < 3 ? null : active === 3 ? "active" : "completed"
            }
          >
            <StepCounter>
              <StepCounterInner>3</StepCounterInner>
            </StepCounter>
            <StepName>Information</StepName>
          </StepperItem>
        </Link>

        <StepperItem
          className={active < 4 ? null : active === 4 ? "active" : "completed"}
        >
          <StepCounter>
            <StepCounterInner>4</StepCounterInner>
          </StepCounter>
          <StepName>Health & Dental</StepName>
        </StepperItem>
      </StepperWrapper>
    </>
  );
}

export default ProgressBar;
