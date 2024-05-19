import { createContext, useContext, useState } from "react";
import { StateContextProps, StateProviderProps } from "./types";
import { Organization, Report } from "../data/types";

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

const StateContext = createContext<StateContextProps>({
  organization: orgInitialState,
  updateOrganization: (state: Organization) => null,
  reports: reportInitialState,
  updateReports: (state: Array<Report>) => null,
});

export const StateContextProvider = ({ children }: StateProviderProps) => {
  const [organization, setOrganization] = useState(orgInitialState);
  const [reports, setReports] = useState(reportInitialState);

  const updateOrganization = (organization: Organization) =>
    setOrganization(organization);

  const updateReports = (reports: Report[]) => setReports(reports);

  return (
    <StateContext.Provider
      value={{
        organization,
        updateOrganization,
        reports,
        updateReports,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
