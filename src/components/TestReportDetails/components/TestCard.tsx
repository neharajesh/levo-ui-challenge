import "./styles.css";
import { TestCardProps } from "./types";

export const TestCard = ({ test, hasFailed }: TestCardProps) => {
  return (
    <div className="testCard">
      <div className={`testMethod ${hasFailed ? "red" : "green"}`}>
        {test.method.toUpperCase()}
      </div>
      <div className="testDetails">
        <p className="testEndpoint">{test.url}</p>
        <p className="testDuration">{test.executionTime}</p>
      </div>
    </div>
  );
};
