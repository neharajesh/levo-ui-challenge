import { createContext, useContext, useState } from "react";
import { StateContextProps, StateProviderProps } from "./types";
import { Organization, Report, Test } from "../data/types";

const orgInitialState = {
  id: "",
  name: "",
  reports: [""],
};

const reportInitialState = [
  {
    id: "",
    date_created: new Date(),
    duration: "",
    testResults: {
      count: 0,
      testsPassed: {
        count: 0,
        tests: [""],
      },
      testsFailed: {
        count: 0,
        tests: [""],
      },
    },
    warnings: [""],
    branch: "",
    commitId: "",
    githubUser: "",
    webUrl: "",
  },
];

const testsInitialState = [
  {
    id: "",
    method: "",
    url: "",
    executionTime: "",
  },
];

const StateContext = createContext<StateContextProps>({
  organization: orgInitialState,
  setOrganization: (state: Organization) => null,
  reports: reportInitialState,
  setReports: (state: Array<Report>) => null,
  tests: testsInitialState,
  setTests: (state: Array<Test>) => null,
});

export const StateContextProvider = ({ children }: StateProviderProps) => {
  const [organization, setOrganization] = useState(orgInitialState);
  const [reports, setReports] = useState(reportInitialState);
  const [tests, setTests] = useState(testsInitialState);

  return (
    <StateContext.Provider
      value={{
        organization,
        setOrganization,
        reports,
        setReports,
        tests,
        setTests,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
