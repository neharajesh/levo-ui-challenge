import "./styles.css";
import { TestSummaryProps } from "./types";
import BranchIcon from "./branch-icon.svg";
import CommitIcon from "./commit-icon.svg";
import DurationIcon from "./duration-icon.svg";
import GithubIcon from "./github-icon.svg";
import UrlIcon from "./url-icon.svg";
import CalendarIcon from "./calendar-icon.svg";
import CubeIcon from "./cube-icon.svg";

export const TestSummary = ({ report }: TestSummaryProps) => {
  return (
    <div className="testSummaryCard">
      <div className="testSummaryData">
        <p>
          <img
            src={DurationIcon}
            alt=""
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.duration}
        </p>
        <p>
          <img
            src={CalendarIcon}
            alt=""
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          10 minutes ago
        </p>
      </div>
      <div className="testSummaryData">
        <img src={CubeIcon} alt="" className="testSummaryIcon" width={14} />
        <p>build-and-deploy (12332) </p>
      </div>
      <div className="testSummaryData">
        <p>
          <img
            src={BranchIcon}
            alt=""
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.branch}
        </p>
        <p>
          <img
            src={CommitIcon}
            alt=""
            className="testSummaryIcon"
            height={14}
            width={14}
          />
          {report?.commitId}
        </p>
        <p>
          <img
            src={GithubIcon}
            alt=""
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
            alt=""
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
