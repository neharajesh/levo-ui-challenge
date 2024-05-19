import "./styles.css";
import { TestSummaryProps } from "./types";
import BranchIcon from "../../../assets/branch-icon.svg";
import CommitIcon from "../../../assets/commit-icon.svg";
import DurationIcon from "../../../assets/duration-icon.svg";
import GithubIcon from "../../../assets/github-icon.svg";
import UrlIcon from "../../../assets/url-icon.svg";
import CalendarIcon from "../../../assets/calendar-icon.svg";
import CubeIcon from "../../../assets/cube-icon.svg";

export const TestSummary = ({ report }: TestSummaryProps) => {
  return (
    <div className="testSummaryCard">
      <div className="testSummaryData">
        <p>
          <img
            src={DurationIcon}
            alt="duration-icon"
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.duration}
        </p>
        <p>
          <img
            src={CalendarIcon}
            alt="calendar-icon"
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          10 minutes ago
        </p>
      </div>
      <div className="testSummaryData">
        <img
          src={CubeIcon}
          alt="cube-icon"
          className="testSummaryIcon"
          width={14}
        />
        <p>build-and-deploy (12332) </p>
      </div>
      <div className="testSummaryData">
        <p>
          <img
            src={BranchIcon}
            alt="branch-icon"
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.branch}
        </p>
        <p>
          <img
            src={CommitIcon}
            alt="commit-icon"
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.commitId}
        </p>
        <p>
          <img
            src={GithubIcon}
            alt="github-icon"
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.githubUser}
        </p>
      </div>
      <div className="testSummaryData">
        <p>
          <img
            src={UrlIcon}
            alt="url-icon"
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.webUrl}
        </p>
      </div>
    </div>
  );
};
