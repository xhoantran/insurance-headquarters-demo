import styled from "styled-components";
import { useState } from "react";

const AutoCompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;
const Container = styled.div`
  max-width: 300px;
  width: 80%;
  height: 50px;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 90% 1fr;
  padding: 0 0.8rem 0 1.2rem;
  border-radius: 15px;
  border: solid 1px #cfcfcf;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`;
const InputIcon = styled.div`
  display: inline-grid;
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
  font-size: 0.8rem;
  color: #333;
`;
const AutocomBox = styled.div`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  max-height: 280px;
  overflow-y: auto;

  &.active {
    padding: 10px 8px;
    opacity: 1;
    pointer-events: auto;
  }

  &.active > li {
    display: block;
  }
`;
const AutocomItem = styled.li`
  list-style: none;
  padding: 8px 12px;
  display: none;
  width: 100%;
  cursor: default;
  border-radius: 3px;
}
`;

function AutocompleteComponent({ icon, placeholder }) {
  const [items, setItems] = useState([
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
  ]);
  return (
    <>
      <AutoCompleteContainer>
        <Container>
          <Input placeholder={placeholder ? placeholder : null} />
          <InputIcon>{icon ? icon : null}</InputIcon>
        </Container>
        <AutocomBox className="active">
          {items.map((item, index) => (
            <AutocomItem key={index}>{item.name}</AutocomItem>
          ))}
        </AutocomBox>
      </AutoCompleteContainer>
    </>
  );
}

export default AutocompleteComponent;
