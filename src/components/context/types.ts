import { ReactNode } from "react";
import { Organization, Report, Test } from "../data/types";

type StateContextProps = {
  organization: Organization | null;
  setOrganization: (state: Organization) => void;
  reports: Array<Report> | null;
  setReports: (state: Array<Report>) => void;
  tests: Array<Test> | null;
  setTests: (state: Array<Test>) => void;
};

type StateProviderProps = {
  children: ReactNode;
};

export type { StateContextProps, StateProviderProps };
