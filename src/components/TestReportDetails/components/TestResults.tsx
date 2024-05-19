import { TestResultsProps } from "./types";
import SuccessIcon from "../../../assets/green-check.svg";
import ErrorIcon from "../../../assets/error.svg";
import "./styles.css";
import { useState } from "react";
import { TestCard } from "./TestCard";

export const TestResults = ({ tests }: TestResultsProps) => {
  const [filteredKeyword, setFilteredKeyword] = useState<string>("");

  const changeHandler = (e: any) => {
    setFilteredKeyword(e.target.value);
  };

  return tests ? (
    <>
      <p>RESULTS</p>
      <p>
        <img src={SuccessIcon} alt="success-icon" height={14} width={14} />
        &nbsp; Passed: {tests.testsPassed.count} / {tests.count}
      </p>
      <p>
        <img src={ErrorIcon} alt="error-icon" height={16} width={16} />
        &nbsp; Failed: {tests.testsFailed.count} / {tests.count}
      </p>

      <div className="filters">
        <label className="filterLabel">FILTER BY ENDPOINT</label>
        <input
          onChange={changeHandler}
          placeholder="Enter Endpoint"
          className="filterInput"
        />
      </div>

      <div className="tests">
        <p>
          <img src={ErrorIcon} alt="error-icon" height={16} width={16} /> &nbsp;
          Failed Tests: {tests.testsFailed.count} / {tests.count}
        </p>
        <div>
          {tests.testsFailed.tests
            .filter((test: any) => test.url.includes(filteredKeyword))
            .map((test: any) => (
              <TestCard key={test.id} test={test} hasFailed />
            ))}
        </div>
      </div>

      <div className="tests">
        <p>
          <img src={SuccessIcon} alt="success-icon" height={14} width={14} />
          &nbsp; Passed Tests: {tests.testsPassed.count} / {tests.count}
        </p>
        <div>
          {tests.testsPassed.tests
            .filter((test: any) => test.url.includes(filteredKeyword))
            .map((test: any) => (
              <TestCard key={test.id} test={test} hasFailed={false} />
            ))}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
