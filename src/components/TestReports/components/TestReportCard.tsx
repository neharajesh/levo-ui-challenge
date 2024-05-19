import { TestReportCardProps } from "./types";
import "./styles.css";
import ErrorIcon from "./error.svg";
import SuccessIcon from "./green-check.svg";
import WarningIcon from "./warning.svg";
import { useNavigate } from "react-router-dom";

export const TestReportCard = ({
  title,
  description,
  result,
  hasWarning = false,
  warningText,
  orgId,
  reportId,
}: TestReportCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/organization/${orgId}/report/${reportId}`);
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
