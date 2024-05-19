import { Section } from "../Section";
import { TestReportCard } from "./components";

export const TestReports = () => {
  return (
    <>
      <Section title="Test Reports">
        <TestReportCard
          title="Execution #1"
          description="2 min ago - 10 min long"
          result={{ passed: 10, failed: 0 }}
        />
        <TestReportCard
          title="Execution #2"
          description="2 min ago - 4 min long"
          result={{ passed: 5, failed: 5 }}
        />
        <TestReportCard
          title="Execution #3"
          description="2 min ago - 45 min long"
          result={{ passed: 0, failed: 10 }}
          hasWarning
          warningText="Took too long"
        />
      </Section>
    </>
  );
};
