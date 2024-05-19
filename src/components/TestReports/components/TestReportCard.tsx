import { TestReportCardProps } from "./types";
import "./styles.css";
import ErrorIcon from "../../../assets/error.svg";
import SuccessIcon from "../../../assets/green-check.svg";
import WarningIcon from "../../../assets/warning.svg";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import { Tests } from "../../data";

export const TestReportCard = ({
  title,
  description,
  result,
  hasWarning = false,
  warningText,
  orgId,
  report,
}: TestReportCardProps) => {
  const navigate = useNavigate();
  const { setTests } = useStateContext();

  const getReportTests = (reportResults: any) => {
    const results = reportResults;
    results.testsFailed.tests = Tests.filter((test) =>
      reportResults.testsFailed.tests.includes(test.id)
    );
    results.testsPassed.tests = Tests.filter((test) =>
      reportResults.testsPassed.tests.includes(test.id)
    );
    return results;
  };

  const handleClick = () => {
    setTests(getReportTests(report.testResults));
    navigate(`/organization/${orgId}/report/${report.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="cardDetails">
        <p className="cardTitle">{title}</p>
        {description && <p className="cardDesc">{description}</p>}
      </div>
      <div className="cardStats">
        {hasWarning && (
          <div className="cardStat">
            <img className="cardIcon" src={WarningIcon} alt="warning-icon" />
            <p>{warningText}</p>
          </div>
        )}
        <div className="cardStat">
          <img className="cardIcon" src={SuccessIcon} alt="success-icon" />
          <p>{result.testsPassed.count} passed</p>
        </div>
        <div className="cardStat">
          <img className="cardIcon" src={ErrorIcon} alt="error-icon" />
          <p>{result.testsFailed.count} failed</p>
        </div>
      </div>
    </div>
  );
};
