import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteMember,
  setMarried,
  setDependents,
  setHouseholdSize,
} from "../../store";
import Link from "next/link";
import { S3HosueholdMemberURL, S3HouseholdURL } from "./Url";
import PlusIcon from "../../assets/icons/Plus";

const OptionContainer = styled.label`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;
const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border: 2px solid ${(props) => (props.addBlock ? "#1e88e5" : "#e1e2e7")};
  padding: 30px;
  border-radius: 10px;
  transition: box-shadow 0.4s;
  position: relative;
  box-shadow: 0px 3px 10px 0px #e8e8e8;

  & > svg {
    margin-right: 30px;
    height: 72px;
  }

  @media (max-width: 450px) {
    padding: 20px;
    flex-direction: column;
    align-items: baseline;
  }

  @media (max-width: 450px) {
    & > svg {
      margin-bottom: 20px;
      height: 56px;
      transition: height 0.4s;
    }
  }
`;
const OptionDetail = styled.div`
  @media (max-width: 768px) {
    width: 70%;
    display: inline-block;
  }
  @media (max-width: 76) {
    width: 60%;
    display: inline-block;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
const OptionTitle = styled.span`
  margin-bottom: 0.625rem;
  display: block;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #252f42;

  &:first-letter {
    text-transform: uppercase;
  }
`;
const OptionDescription = styled.p`
  color: #646a79;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: left;
  margin-bottom: 0.625rem;
`;
const ActionContainer = styled.div`
  font-size: 0.75rem;
  color: #2196f3;
  margin-top: 0.625rem;
  display: flex;
  gap: 1rem;
`;
const ActionButton = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const MemberCard = ({
  title,
  memberProps = { dob: "", gender: "" },
  onRemove,
  addBlock,
}) => {
  return (
    <>
      <OptionContainer>
        <OptionContent>
          <OptionDetail>
            <OptionTitle>
              {title.replace("dependent", "dependent ")}
            </OptionTitle>
            <OptionDescription>
              Date of birth: {memberProps.dob}
            </OptionDescription>
            <OptionDescription>Gender: {memberProps.gender}</OptionDescription>
            <ActionContainer>
              <Link href={S3HosueholdMemberURL + title}>
                <ActionButton>Edit</ActionButton>
              </Link>
              {title !== "you" && (
                <ActionButton onClick={onRemove}>Remove</ActionButton>
              )}
            </ActionContainer>
          </OptionDetail>
        </OptionContent>
      </OptionContainer>
    </>
  );
};

const AddMemberDetail = styled(OptionDetail)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const AddMemberOptionContainer = styled(OptionDescription)`
  margin-top: 0.625rem;
  color: #9597a0;
`;
const AddMemberCard = () => {
  return (
    <>
      <Link href={S3HouseholdURL}>
        <OptionContainer>
          <OptionContent style={{ border: "2px dashed #e1e2e7" }}>
            <AddMemberDetail>
              <PlusIcon />
              <AddMemberOptionContainer>
                Add another member
              </AddMemberOptionContainer>
            </AddMemberDetail>
          </OptionContent>
        </OptionContainer>
      </Link>
    </>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.fullwidth ? `repeat(1, 1fr)` : `repeat(2, 1fr)`};};  
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 2rem;
  max-width: 500px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function TotalMembers({ addBlock = false }) {
  const informations = useSelector((state) => state.informations);
  const people = informations.people;

  const dispatch = useDispatch();
  const handleDelete = (typePeople) => {
    if (Object.keys(informations.people).length === 2) {
      dispatch(setHouseholdSize("0"));
    }
    dispatch(deleteMember(typePeople));
    if (typePeople === "spouse") {
      dispatch(setMarried("0"));
    }
    if (typePeople.includes("dependent")) {
      if (informations.dependents.value === "1") {
        dispatch(setDependents({ is_set: "0", value: "0" }));
      } else {
        dispatch(setDependents({ ...informations.dependents, value: "0" }));
      }
    }
  };

  const radioOptions = Object.keys(people).reduce((peopleList, key) => {
    if (
      (informations.married === "0" && key === "spouse") ||
      (informations.dependents.is_set === "0" && key.includes("dependent")) ||
      (informations.householdSize === "0" && key !== "you")
    )
      return peopleList;
    peopleList.push({
      title: key,
      memberProps: people[key],
      onRemove: () => {
        handleDelete(key);
      },
    });
    return peopleList;
  }, []);

  return (
    <Wrapper>
      <Container fullwidth={!addBlock}>
        {radioOptions.map((option, index) => (
          <MemberCard key={index} {...option} addBlock={addBlock} />
        ))}
        {addBlock && <AddMemberCard />}
      </Container>
    </Wrapper>
  );
}

export default TotalMembers;
