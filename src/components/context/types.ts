import { ReactNode } from "react";
import { Organization, Report, Test } from "../data/types";

type StateContextProps = {
  organization: Organization | null;
  updateOrganization: (state: Organization) => void;
  reports: Array<Report> | null;
  updateReports: (state: Array<Report>) => void;
  tests: Array<Test> | null;
  updateTests: (state: Array<Test>) => void;
};

type StateProviderProps = {
  children: ReactNode;
};

export type { StateContextProps, StateProviderProps };
