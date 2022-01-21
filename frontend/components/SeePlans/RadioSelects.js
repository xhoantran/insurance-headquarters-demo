import styled from "styled-components";

const SelectCotainer = styled.label`
  cursor: pointer;
  width: 48.5%;
  height: 100%;
`;
const SelectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  border: 2px solid #e1e2e7;
  border-radius: 10px;
  transition: box-shadow 0.4s;
  position: relative;
  height: 100%;

  &:hover {
    box-shadow: 0px 3px 5px 0px #e8e8e8;
  }
`;
const InputRadio = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + ${SelectContent} {
    border: 2px solid #216ee0;
    background: #eaf1fe;
    transition: ease-in 0.3s;
  }

  &:checked + ${SelectContent}:after {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    background: #216fe0;
    right: 10px;
    top: 10px;
    border-radius: 100%;
    border: 3px solid #fff;
    box-shadow: 0px 0px 0px 2px #0066ff;
  }
`;
const ImageContainer = styled.div`
  display: flex;
`;
const SelectDetail = styled.div`
  font-size: 1.2rem;
  line-height: 24px;
  color: #252f42;
  text-align: center;

  @media (max-width: 1024px min-width: 768px) {
    font-size: 1rem;
  }
`;

const Select = ({
  img,
  detail,
  optionValue,
  selectValue,
  inputName,
  onChange,
}) => {
  return (
    <>
      <SelectCotainer>
        <InputRadio
          type="radio"
          name={inputName}
          value={optionValue}
          onChange={onChange}
          checked={optionValue === selectValue}
          readOnly={!onChange}
        />
        <SelectContent>
          <ImageContainer>{img}</ImageContainer>
          <SelectDetail>{detail}</SelectDetail>
        </SelectContent>
      </SelectCotainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  max-width: 100%;
  width: 100%;
`;
const RadioLabel = styled.label`
  font-weight: 700;
  line-height: 1.375rem;
  margin-bottom: 0.781rem;
`;

function RadioSelects({
  label,
  radioOptions,
  inputName,
  selectValue,
  onChange,
}) {
  return (
    <>
      {label && <RadioLabel>{label}</RadioLabel>}
      <Container>
        {radioOptions.map((option, index) => (
          <Select
            key={index}
            {...option}
            inputName={inputName}
            onChange={onChange}
            selectValue={selectValue}
          />
        ))}
      </Container>
    </>
  );
}

export default RadioSelects;
