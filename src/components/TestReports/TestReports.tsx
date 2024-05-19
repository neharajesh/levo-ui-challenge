import { Section } from "../Section";
import { TestReportCard } from "./components";

export const TestReports = () => {
  return (
    <>
      <Section title="Test Reports">
        <TestReportCard
          title=""
          description=""
          result={{ passed: 0, failed: 0 }}
        />
      </Section>
    </>
  );
};
