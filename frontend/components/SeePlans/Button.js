import styled from "styled-components";
import Link from "next/link";

const ButtonNextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 20px 0;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &.skip {
    background-color: #1e88e5;
  }

  &.disabled,
  &.disabled:hover {
    background-color: #d6d6d6;
    pointer-events: none;
  }

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

export const ButtonNext = ({ onClick, url, children, disabled = false }) => {
  return (
    <>
      <Link href={url ? url : ""}>
        <ButtonNextWrapper
          onClick={onClick ? onClick : void 0}
          className={disabled ? "disabled" : ""}
        >
          {children}
        </ButtonNextWrapper>
      </Link>
    </>
  );
};

export const ButtonNextOrSkip = ({ onClick, url, children, skip = true }) => {
  return (
    <>
      <Link href={url ? url : ""}>
        <ButtonNextWrapper
          onClick={onClick ? onClick : void 0}
          className={skip ? "skip" : ""}
        >
          {skip ? "Skip" : children}
        </ButtonNextWrapper>
      </Link>
    </>
  );
};

const ButtonBackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  font-weight: bold;
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 20px 0;
  cursor: pointer;

  &:hover {
    color: var(--primary-color-dark);
  }
`;

export const ButtonBack = ({ onClick, url, children }) => {
  return (
    <>
      <Link href={url ? url : ""}>
        <ButtonBackWrapper onClick={onClick ? onClick : void 0}>
          {children}
        </ButtonBackWrapper>
      </Link>
    </>
  );
};
