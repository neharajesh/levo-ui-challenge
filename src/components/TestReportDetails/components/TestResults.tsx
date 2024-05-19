import { TestResultsProps } from "./types";
import "./styles.css";

export const TestResults = ({ tests }: TestResultsProps) => {
  console.log({ tests });
  return tests ? (
    <>
      <p>RESULTS</p>
      <p>
        Passed: {tests.testsPassed.count} / {tests.count}
      </p>
      <p>
        Failed: {tests.testsFailed.count} / {tests.count}
      </p>

      <div className="filters"></div>
      <div className="passedTests"></div>
      <div className="failedTests"></div>
    </>
  ) : (
    <></>
  );
};
