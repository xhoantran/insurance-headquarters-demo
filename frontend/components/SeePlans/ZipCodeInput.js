import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountyID, setCountyName } from "../../store";
import Checkmark from "../../assets/icons/Checkmark";

const InputLabel = styled.label`
  font-weight: 700;
  line-height: 1.375rem;
  margin-bottom: 0.781rem;
`;
const AutoCompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 90% 1fr;
  padding-left: 1.2rem;
  height: 50px;
  border-radius: 5px;
  border: solid 1px #eaeced;

  &.active {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px 5px 0px 0px;
    border-top: solid 1px #2196f3;
    border-right: solid 1px #2196f3;
    border-left: solid 1px #2196f3;
  }

  &.error {
    border-color: #f44336;
  }

  @media (max-width: 768px) {
    padding: 0 0.8rem;
  }
`;
const InputIcon = styled.div`
  display: inline-grid;
  max-width: 30px;
  min-width: 25px;
  & > svg {
    align-self: center;
    vertical-align: middle;
  }
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  font-size: 1.2rem;
  width: 100%;
  color: #333;

  &::placeholder {
    color: #81838c;
  }
`;
const AutocomBox = styled.div`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  overflow-y: auto;
  background: #fff;
  border: solid 1px #e3e3e3;
  border-radius: 0px 0px 5px 5px;
  transform: translateY(-1px);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  width: 100%;

  &.active {
    padding: 10px 8px;
    opacity: 1;
    pointer-events: auto;
    border-bottom: solid 1px #2196f3;
    border-right: solid 1px #2196f3;
    border-left: solid 1px #2196f3;
  }

  &.active > li {
    display: block;
  }
`;
const AutocomItem = styled.li`
  list-style: none;
  padding: 4px 8px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
  font-size: 1.2rem;
  color: #81838c;

  &.containVal:hover {
    background-color: #1565c0;
    color: #fff;
  }
`;
const ErrorText = styled.p`
  color: #f44336;
  font-size: 0.875rem;
  text-align: left;
  margin: 5px;
  visibility: hidden;

  &.error {
    visibility: visible;
  }
`;

function AutocompleteComponent() {
  const countyName = useSelector((state) => state.informations.countyName);
  const noResults = { id: null };
  const [options, setOptions] = useState([noResults]);
  const [inputValue, setInputValue] = useState(countyName);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(false);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setActive(false);
    }
  };
  const handleFocus = () => {
    setActive(true);
  };
  const handleSelect = (event) => {
    var countyName = event.target.innerText;
    setActive(false);
    setError(false);
    setInputValue(countyName);
    dispatch(setCountyName(countyName));
    dispatch(setCountyID(event.target.value ? event.target.value : 0));
  };
  const handleInput = async (event) => {
    var input = event.target.value;
    setInputValue(input);
    if (input.length === 5) {
      const res = await fetch(
        `https://insurance-headquarter.herokuapp.com/api/v1/county/${input}/`
      );
      const data = await res.json();
      if (data.length > 0) {
        setOptions(data);
      } else {
        setOptions([noResults]);
      }
    } else {
      setOptions([noResults]);
    }
    if (input !== countyName) {
      setError(true);
      dispatch(setCountyID(0));
    }
    if (input.length === 0) {
      dispatch(setCountyID(0));
      dispatch(setCountyName(""));
    }
  };

  return (
    <>
      <InputLabel>Zipcode</InputLabel>
      <AutoCompleteContainer onFocus={handleFocus} ref={wrapperRef}>
        <Container className={active ? "active" : error ? "error" : null}>
          <Input
            placeholder="Ex: 48084"
            onChange={handleInput}
            value={inputValue}
            spellCheck="false"
            autoComplete="off"
          />
          {!error && inputValue.length !== 0 && (
            <InputIcon>
              <Checkmark />
            </InputIcon>
          )}
        </Container>
        <AutocomBox className={active ? "active" : null}>
          {options.map((item, index) =>
            item.id === null ? (
              <AutocomItem key={index}>No Results</AutocomItem>
            ) : (
              <AutocomItem
                key={index}
                onClick={handleSelect}
                className="containVal"
                value={item.id}
              >
                {item.name} {item.state}, {item.zipcode}
              </AutocomItem>
            )
          )}
        </AutocomBox>
        <ErrorText className={error ? "error" : null}>
          Please enter a valid zipcode
        </ErrorText>
      </AutoCompleteContainer>
    </>
  );
}

export default AutocompleteComponent;
