import { useParams } from "react-router-dom";
import { Section } from "../Section";
import { TestResults, TestSummary } from "./components";
import { Reports } from "../data";

export const TestReportDetails = () => {
  const { reportId } = useParams();
  const currentReport = Reports.find((report) => report.id === reportId);

  return (
    <Section
      title={`Execution #${reportId}`}
      description={`Test Report Details`}
    >
      <TestSummary report={currentReport} />
      <TestResults tests={currentReport?.testResults || null} />
    </Section>
  );
};
