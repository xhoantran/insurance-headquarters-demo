import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let store;
const initialPeople = {
  dob: "",
  gender: "",
};
const initialReduxState = {
  timeVisited: 0,
  informations: {
    countyID: 0,
    countyName: "",
    previousPlan: {
      id: null,
    },
    householdSize: null,
    married: null,
    dependents: {
      is_set: null,
      value: "0",
    },
    people: { you: initialPeople },
    income: "",
    selectedPlanDetail: null,
    planResult: {
      total: null,
      plans: [],
    },
    filter: {
      sorting: "premium",
    },
  },
};

export const actionTypes = {
  GET_A_QUOTE: "GET_A_QUOTE",
  SET_COUNTY_ID: "SET_COUNTY_ID",
  SET_COUNTY_NAME: "SET_COUNTY_NAME",
  SET_PREVIOUS_PLAN: "SET_PREVIOUS_PLAN",
  SET_HOUSEHOLD_SIZE: "SET_HOUSEHOLD_SIZE",
  SET_MARRIED: "SET_MARRIED",
  SET_DEPENDENTS: "SET_DEPENDENTS",
  SET_MEMBER: "SET_MEMBER",
  DELETE_MEMBER: "DELETE_MEMBER",
  SET_MEMBER_OPTIONS: "SET_MEMBER_OPTIONS",
  SET_INCOME: "SET_INCOME",
  SELECT_PLAN_DETAIL: "SELECT_PLAN_DETAIL",
  SET_PLANS: "SET_PLANS",
  SET_FILTER: "SET_FILTER",
};

// REDUCERS
export const reducer = (state = initialReduxState, action) => {
  switch (action.type) {
    case actionTypes.SET_COUNTY_ID:
      return {
        ...state,
        informations: {
          ...state.informations,
          countyID: action.countyID,
        },
      };
    case actionTypes.SET_COUNTY_NAME:
      return {
        ...state,
        informations: {
          ...state.informations,
          countyName: action.countyName,
        },
      };
    case actionTypes.GET_A_QUOTE:
      return {
        ...state,
        timeVisited: state.timeVisited + 1,
      };
    case actionTypes.SET_PREVIOUS_PLAN:
      return {
        ...state,
        informations: {
          ...state.informations,
          previousPlan: action.previousPlan,
        },
      };
    case actionTypes.SET_HOUSEHOLD_SIZE:
      return {
        ...state,
        informations: {
          ...state.informations,
          householdSize: action.householdSize,
        },
      };
    case actionTypes.SET_MARRIED:
      return {
        ...state,
        informations: {
          ...state.informations,
          married: action.married,
        },
      };
    case actionTypes.SET_DEPENDENTS:
      return {
        ...state,
        informations: {
          ...state.informations,
          dependents: action.dependents,
        },
      };
    case actionTypes.SET_MEMBER:
      if (state.informations.people[action.key]) return state;
      return {
        ...state,
        informations: {
          ...state.informations,
          people: {
            ...state.informations.people,
            [action.key]: initialPeople,
          },
        },
      };
    case actionTypes.SET_MEMBER_OPTIONS:
      return {
        ...state,
        informations: {
          ...state.informations,
          people: {
            ...state.informations.people,
            [action.key]: action.options,
          },
        },
      };
    case actionTypes.DELETE_MEMBER:
      const { [action.key]: deleted, ...rest } = state.informations.people;
      return {
        ...state,
        informations: {
          ...state.informations,
          people: rest,
        },
      };
    case actionTypes.SET_INCOME:
      return {
        ...state,
        informations: {
          ...state.informations,
          income: action.income,
        },
      };
    case actionTypes.SELECT_PLAN_DETAIL:
      var selectedPlan;
      for (let plan of state.informations.planResult.plans) {
        if (plan.id === action.planID) {
          selectedPlan = plan;
          break;
        }
      }
      return {
        ...state,
        informations: {
          ...state.informations,
          selectedPlanDetail: selectedPlan,
        },
      };
    case actionTypes.SET_PLANS:
      return {
        ...state,
        informations: {
          ...state.informations,
          planResult: action.planResult,
        },
      };
    case actionTypes.SET_FILTER:
      return {
        ...state,
        informations: {
          ...state.informations,
          filter: action.filter,
        },
      };
    default:
      return state;
  }
};

// ACTIONS
export const setCountyID = (countyID) => {
  return { type: actionTypes.SET_COUNTY_ID, countyID: countyID };
};
export const setCountyName = (countyName) => {
  return { type: actionTypes.SET_COUNTY_NAME, countyName: countyName };
};
export const logGetAQuote = () => {
  return { type: actionTypes.GET_A_QUOTE };
};
export const setPreviousPlan = (previousPlan) => {
  return { type: actionTypes.SET_PREVIOUS_PLAN, previousPlan: previousPlan };
};
export const setHouseholdSize = (householdSize) => {
  return { type: actionTypes.SET_HOUSEHOLD_SIZE, householdSize: householdSize };
};
export const setMarried = (married) => {
  return { type: actionTypes.SET_MARRIED, married: married };
};
export const setDependents = (dependents) => {
  return { type: actionTypes.SET_DEPENDENTS, dependents: dependents };
};
export const setMember = (key) => {
  return { type: actionTypes.SET_MEMBER, key: key };
};
export const deleteMember = (key) => {
  return { type: actionTypes.DELETE_MEMBER, key: key };
};
export const setMemberOptions = (key, options) => {
  return {
    type: actionTypes.SET_MEMBER_OPTIONS,
    key: key,
    options: options,
  };
};
export const setIncome = (income) => {
  return { type: actionTypes.SET_INCOME, income: income };
};
export const selectPlanDetail = (planID) => {
  return { type: actionTypes.SELECT_PLAN_DETAIL, planID: planID };
};
export const setPlans = (planResult) => {
  return { type: actionTypes.SET_PLANS, planResult: planResult };
};
export const setFilter = (filter) => {
  return { type: actionTypes.SET_FILTER, filter: filter };
};

const persistConfig = {
  timeout: 1,
  key: "primary",
  storage,
  whitelist: ["timeVisited", "informations"], // place to select which state you want to persist
};

const persistedReducer = persistReducer(persistConfig, reducer);

function makeStore(initialState = initialReduxState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
