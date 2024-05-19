import { Section } from "../Section";
import { useStateContext } from "../context/StateContext";
import { TestReportCard } from "./components";

export const TestReports = () => {
  const { organization, reports } = useStateContext();

  return (
    <>
      <Section title="Test Reports">
        {organization &&
          reports &&
          reports.map((report) => (
            <TestReportCard
              key={report.id}
              title={`Execution #${parseInt(report.id)}`}
              description={`2 min ago - ${report.duration} long`}
              result={report.testResults}
              orgId={organization.id}
              report={report}
              hasWarning={report.warnings[0] !== ""}
              warningText={report.warnings[0]}
            />
          ))}
      </Section>
    </>
  );
};
