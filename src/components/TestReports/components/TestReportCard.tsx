import { TestReportCardProps } from "./types";
import "./styles.css";
import ErrorIcon from "./error.svg";
import SuccessIcon from "./green-check.svg";
import WarningIcon from "./warning.svg";

export const TestReportCard = ({
  title,
  description,
  result,
  hasWarning = false,
  warningText,
}: TestReportCardProps) => {
  return (
    <div className="card">
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
          <p>{result.passed} passed</p>
        </div>
        <div className="cardStat">
          <img className="cardIcon" src={ErrorIcon} alt="error-icon" />
          <p>{result.failed} failed</p>
        </div>
      </div>
    </div>
  );
};
