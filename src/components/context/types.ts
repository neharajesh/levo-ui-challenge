import { ReactNode } from "react";
import { Organization, Report } from "../data/types";

type StateContextProps = {
  organization: Organization | null;
  updateOrganization: (state: Organization) => void;
  reports: Array<Report> | null;
  updateReports: (state: Array<Report>) => void;
};

type StateProviderProps = {
  children: ReactNode;
};

export type { StateContextProps, StateProviderProps };
