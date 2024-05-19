import { Section } from "../Section";
import { TestReportCard } from "./components";

export const TestReports = ({ orgId = "1" }) => {
  return (
    <>
      <Section title="Test Reports">
        <TestReportCard
          title="Execution #1"
          description="2 min ago - 10 min long"
          result={{ passed: 10, failed: 0 }}
          orgId={orgId}
          reportId={"1"}
        />
        <TestReportCard
          title="Execution #2"
          description="2 min ago - 4 min long"
          result={{ passed: 5, failed: 5 }}
          orgId={orgId}
          reportId={"2"}
        />
        <TestReportCard
          title="Execution #3"
          description="2 min ago - 45 min long"
          result={{ passed: 0, failed: 10 }}
          hasWarning
          warningText="Took too long"
          orgId={orgId}
          reportId={"3"}
        />
      </Section>
    </>
  );
};
