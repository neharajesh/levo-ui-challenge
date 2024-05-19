import { Report, Test } from "../../data/types";

type TestSummaryProps = {
  report?: Report;
};

type TestResultsProps = {
  tests?: any;
};

type TestCardProps = {
  test: Test;
  hasFailed: boolean;
};

export type { TestSummaryProps, TestResultsProps, TestCardProps };
