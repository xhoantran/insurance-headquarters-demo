import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import InsuranceCard from "./ShowPlanComponent/InsuranceCard";
import InsuranceTabDetail from "./ShowPlanComponent/InsuranceTabDetail";
import InsuranceFilter from "./ShowPlanComponent/InsuranceFilter";
import { selectPlanDetail, setPlans, setFilter } from "../../store";
import ProgressBar from "./ProgressBar";
import InsurancePagination from "./ShowPlanComponent/InsurancePagination";

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const PlansWrapper = styled.div`
  background-color: var(--background--color);
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  position: relative;
`;
const PlansContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: 50% 50%;
  }
`;
const PlansLeftContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  justify-content: center;
  margin-top: calc(50px + 2rem);
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 465px;
  width: 100%;
  padding: 0 10px;
`;
const ContentTitle = styled.h1`
  font-size: 1.75rem;
  line-height: 1.75rem;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;
const PlansRightContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
  width: 100%;

  @media (max-width: 600px) {
    & {
      grid-column: 1;
      grid-row: 1;
      position: relative;
      z-index: 100;
      background-color: #fff;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out;
    }
    &.closeTab {
      opacity: 0;
      height: 0;
      pointer-events: none;
      transform: translateY(100%);
    }

    &.openTab {
      opacity: 1;
      height: 100%;
      pointer-events: all;
      transform: translateY(0);
    }
  }
`;
const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
`;
const PlansRightContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  border-left: 1px solid #f2f4f6;
`;
const PlansRightText = styled.p`
  text-align: center;
  line-height: 22px;
  font-weight: 400;
  color: #0d47a1;
  font-size: 1rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default function ShowPlans({ pageNumber }) {
  const informations = useSelector((state) => state.informations);
  const dispatch = useDispatch();
  const handleSelectPlan = (e) => {
    dispatch(selectPlanDetail(e.target.value));
  };
  const handleCloseTab = () => {
    dispatch(selectPlanDetail({}));
  };
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  useEffect(() => {
    if (informations.people !== {}) {
      fetch("https://insurance-headquarter.herokuapp.com/api/v1/plan/search/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
        method: "POST",
        body: JSON.stringify({
          household: {
            income: parseInt(informations.income),
            has_married_couple: !!informations.married,
            people: Object.keys(informations.people).reduce(
              (peopleList, key) => {
                if (
                  (informations.married === "0" && key === "spouse") ||
                  (informations.dependents.is_set === "0" &&
                    key.includes("dependent")) ||
                  (informations.householdSize === "0" && key !== "you")
                )
                  return peopleList;
                var dob = informations.people[key].dob.split("/");
                peopleList.push({
                  aptc_eligible: true,
                  dob: [dob[2], dob[0], dob[1]].join("-"), // Convert to YYYY-MM-DD
                  gender: informations.people[key].gender,
                });
                return peopleList;
              },
              []
            ),
          },
          market: "Individual",
          place: informations.countyID,
          year: 2022,
          filter: {
            division: "HealthCare",
            metal_level: "Silver",
          },
          order: "asc",
          offset: (pageNumber - 1) * 10,
          sort: informations.filter.sort,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          dispatch(setPlans(response));
        });
    }
  }, [informations.filter, pageNumber]);

  return (
    <>
      <PlansWrapper>
        <PlansContainer>
          <PlansLeftContainer>
            <Header />
            <ContentContainer>
              <FlexContainer>
                <ProgressBar active={4} />
              </FlexContainer>
              <ContentTitle
                style={{
                  margin: "2rem auto 0.75rem",
                  maxWidth: "400px",
                  width: "100%",
                }}
              >
                {"Your top choices"}
              </ContentTitle>
              <InsuranceFilter
                informations={informations}
                onFilterChange={handleFilterChange}
              />
              {informations?.planResult?.plans?.map((plan) => (
                <InsuranceCard
                  key={plan.id}
                  {...plan}
                  selectedPlanDetail={informations.selectedPlanDetail?.id}
                  onSelectPlan={handleSelectPlan}
                />
              )) || <p>Loading...</p>}
              {informations?.planResult?.total && (
                <InsurancePagination
                  totalItems={informations?.planResult?.total}
                  currentPage={pageNumber}
                />
              )}
            </ContentContainer>
          </PlansLeftContainer>
          <PlansRightContainer
            className={informations.selectedPlanDetail ? "openTab" : "closeTab"}
          >
            <StickyContainer>
              <PlansRightContentWrapper>
                {informations.selectedPlanDetail ? (
                  <InsuranceTabDetail
                    {...informations.selectedPlanDetail}
                    onCloseTab={handleCloseTab}
                  />
                ) : (
                  <PlansRightText>
                    Select a plan to see more details about it.
                  </PlansRightText>
                )}
              </PlansRightContentWrapper>
            </StickyContainer>
          </PlansRightContainer>
        </PlansContainer>
      </PlansWrapper>
    </>
  );
}
