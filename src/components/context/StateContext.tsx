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
    url: "",
    method: "",
    executionTime: "",
  },
];

const StateContext = createContext<StateContextProps>({
  organization: orgInitialState,
  updateOrganization: (state: Organization) => null,
  reports: reportInitialState,
  updateReports: (state: Array<Report>) => null,
  tests: testsInitialState,
  updateTests: (state: Array<Test>) => null,
});

export const StateContextProvider = ({ children }: StateProviderProps) => {
  const [organization, setOrganization] = useState(orgInitialState);
  const [reports, setReports] = useState(reportInitialState);
  const [tests, setTests] = useState(testsInitialState);

  const updateOrganization = (organization: Organization) =>
    setOrganization(organization);

  const updateReports = (reports: Report[]) => setReports(reports);

  const updateTests = (tests: Test[]) => setTests(tests);

  return (
    <StateContext.Provider
      value={{
        organization,
        updateOrganization,
        reports,
        updateReports,
        tests,
        updateTests,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
