import styled from "styled-components";
import { useState } from "react";
import Checkmark from "../../assets/icons/Checkmark";

const InputLabel = styled.label`
  font-weight: 700;
  line-height: 1.375rem;
  margin-bottom: 0.781rem;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 1.2rem;
  border-radius: 5px;
  border: solid 1px #eaeced;

  &.active {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    border: solid 1px #2196f3;
  }

  @media (max-width: 768px) {
    padding: 0 0.8rem;
  }
`;
const InputIcon = styled.div`
  display: inline-flex;
  max-width: 30px;
  min-width: 25px;
  & > svg {
    align-self: center;
    vertical-align: middle;
  }
`;
const Input = styled.input`
  display: inline-block;
  background: none;
  outline: none;
  border: none;
  font-size: 1.2rem;
  width: 100%;
  color: #333;

  &::placeholder {
    color: #81838c;
  }

  &.error {
    border-color: #f44336;
  }
`;
const ErrorText = styled.p`
  color: #f44336;
  font-size: 0.75rem;
  text-align: left;
  margin: 5px;
  visibility: hidden;

  &.error {
    visibility: visible;
  }
`;
const PreSpan = styled.span`
  display: inline-flex;
  font-size: 1.2rem;
  color: #333;
  margin-right: 2px;
`;
function CustomInput({
  label,
  placeholder,
  value,
  onChange,
  maxLength,
  error = false,
  valid = false,
  errorText = "",
  type = "text",
  preSpan,
}) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Container className={focus ? "active" : ""}>
        {preSpan && <PreSpan>{preSpan}</PreSpan>}
        <Input
          maxLength={maxLength}
          placeholder={placeholder}
          value={value ? value : ""}
          onChange={onChange ? onChange : void 0}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          spellCheck="false"
          autoComplete="off"
          type={type}
          readOnly={!onChange}
        />
        {valid && (
          <InputIcon>
            <Checkmark />
          </InputIcon>
        )}
      </Container>
      <ErrorText className={error ? "error" : null}>
        {errorText ? errorText : "Invalid input"}
      </ErrorText>
    </>
  );
}

export default CustomInput;
