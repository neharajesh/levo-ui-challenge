import { TestReportCardProps } from "./types";
import "./styles.css";

export const TestReportCard = ({
  title,
  description,
  result,
}: TestReportCardProps) => {
  return (
    <div className="card">
      <div className="cardDetails">
        <p className="cardTitle">{title}</p>
        {description && <p className="cardDesc">{description}</p>}
      </div>
      <div className="cardStats">
        <div className="passed">{result.passed} passed</div>
        <div className="failed">{result.failed} failed</div>
      </div>
    </div>
  );
};
