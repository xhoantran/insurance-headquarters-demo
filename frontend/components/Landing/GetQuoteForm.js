import styled from "styled-components";
import { useState } from "react";
import { BPSmall, BPMobileM } from "../Layout/BreakPoint";
import ContactUs from "../../assets/svg/ContactUs";
import Bubble from "../Layout/Bubble";
import Loading from "../../assets/icons/Loading";

const FormLabel = styled.p`
  font-size: 1rem;
  line-height: 1.6rem;
  padding-left: 0.6rem;
  text-align: left;
  font-weight: 600;
`;
const FormInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const FormInputContainer = styled.div`
  max-width: 300px;
  width: 80%;
  height: 45px;
  padding: 0 0.8rem;
  border-radius: 15px;
  border: solid 1px #cfcfcf;

  @media (max-width: ${BPSmall}) {
    width: 100%;
  }
`;
const FormInput = styled.input`
  background: none;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 0.9rem;
  color: #333;

  &::placeholder {
    color: #a8a8a8;
  }
`;
const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  background-color: #e3f2fd69;
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
  padding: 6rem 2rem;
  direction: ltr;

  @media (max-width: ${BPSmall}) {
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media (max-width: ${BPMobileM}) {
    padding: 0;
  }
`;
const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  z-index: 2;

  @media (max-width: ${BPSmall}) {
    display: none;
  }
`;
const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  margin: 2rem;
  background-color: #fff;
  z-index: 1;
  border: 1px solid var(--border-dark);
  border-radius: 20px;

  @media (max-width: ${BPSmall}) {
    width: 100%;
    padding: 2rem;
  }

  @media (max-width: ${BPMobileM}) {
    margin: 0;
    border-radius: 0;
    border: none;
  }
`;
const Blue = styled.span`
  color: #2196f3;
`;
const FormTitle = styled.h1`
  @media (max-width: ${BPSmall}) {
    font-size: 1.5rem;
  }
`;
const FormText = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
  text-align: left;
  max-width: 30rem;

  @media (max-width: ${BPSmall}) {
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputHelpText = styled.p`
  padding-left: 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  color: red;
  visibility: hidden;
`;
const FormRow = styled.div`
  width: 100%;

  &.error ${FormInputContainer} {
    border-color: red;
  }

  &.error > ${InputHelpText} {
    visibility: visible;
    margin-bottom: 5px;
  }
`;
const FormButton = styled.button`
  background-color: #2196f3;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 0.5rem;
  cursor: pointer;
`;
function GetQuoteForm() {
  const initialFormData = Object.freeze({
    fullName: "",
    zipcode: "",
    email: "",
    phoneNumber: "",
    dob: "",
  });
  const [invalid, setInvalid] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    var { name, value } = e.target;
    if (name === "dob") {
      if (value.length == 2 || value.length == 5) {
        setFormData({ ...formData, dob: value + "/" });
        return;
      }
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkFormValidity = () => {
    const { fullName, zipcode, email, phoneNumber, dob } = formData;
    if (
      fullName.length === 0 ||
      zipcode.length === 0 ||
      email.length === 0 ||
      phoneNumber.length === 0 ||
      dob.length === 0
    ) {
      setInvalid(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (checkFormValidity() && !loading) {
      fetch("https://insurance-headquarter.herokuapp.com/api/v1/getquote/", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          zipcode: formData.zipcode,
          email: formData.email,
          phone_number: formData.phoneNumber,
          dob: formData.dob,
        }),
      }).then((res) => {
        console.log(res);
        if (res.status === 201) {
        }
      });
    }
  };

  const inputField = [
    {
      title: "Full Name",
      fieldName: "fullName",
      inputComp: (
        <FormInput
          name="fullName"
          type="text"
          placeholder="John Adams"
          onChange={handleChange}
          value={formData.fullName}
        />
      ),
    },
    {
      title: "Date of Birth",
      fieldName: "dob",
      inputComp: (
        <FormInput
          name="dob"
          type="tel"
          placeholder="MM/DD/YYYY"
          onChange={handleChange}
          value={formData.dob}
        />
      ),
    },
    {
      title: "Zip Code",
      fieldName: "zipcode",
      inputComp: (
        <FormInput
          name="zipcode"
          type="text"
          pattern="\d{1,5}"
          maxLength="5"
          placeholder="48084"
          onChange={handleChange}
          value={formData.zipcode}
        />
      ),
    },
    {
      title: "Email",
      fieldName: "email",
      inputComp: (
        <FormInput
          name="email"
          type="email"
          placeholder="example@domain.com"
          onChange={handleChange}
          value={formData.email}
        />
      ),
    },
    {
      title: "Phone Number",
      fieldName: "phoneNumber",
      inputComp: (
        <FormInput
          name="phoneNumber"
          type="number"
          placeholder="(321) 720-3127 "
          onChange={handleChange}
          value={formData.phoneNumber}
        />
      ),
    },
  ];

  return (
    <>
      <SectionContainer id="getQuoteForm">
        <Bubble />
        <SectionWrapper>
          <GraphContainer>
            <ContactUs />
          </GraphContainer>
          <SectionForm>
            <FormTitle>
              <Blue>Let&apos;s talk</Blue>
            </FormTitle>
            <FormText>
              Lave a message and make one-on-one appointment with our
              <Blue> expert adviser</Blue> to review your needs and advise you
              on what would be the best option for you.
            </FormText>
            <FormWrap>
              {inputField.map((field, index) => (
                <FormRow
                  key={index}
                  className={
                    invalid && formData[field.fieldName].length === 0
                      ? "error"
                      : ""
                  }
                >
                  <FormLabel>{field.title}</FormLabel>
                  <FormInputWrapper>
                    <FormInputContainer>{field.inputComp}</FormInputContainer>
                  </FormInputWrapper>
                  <InputHelpText>This field is required</InputHelpText>
                </FormRow>
              ))}
              <FormRow>
                <FormButton onClick={handleSubmit}>
                  {loading ? <Loading /> : "Submit"}
                </FormButton>
              </FormRow>
            </FormWrap>
          </SectionForm>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
}

export default GetQuoteForm;
