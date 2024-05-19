import { Report } from "../../data/types";

export type TestReportCardProps = {
  title: string;
  description?: string;
  result: {
    count: number;
    testsPassed: {
      count: number;
      tests: Array<string>;
    };
    testsFailed: {
      count: number;
      tests: Array<string>;
    };
  };
  hasWarning?: boolean;
  warningText?: string;
  orgId: string;
  report: Report;
};
