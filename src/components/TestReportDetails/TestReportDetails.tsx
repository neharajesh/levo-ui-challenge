import { useParams } from "react-router-dom";
import { Section } from "../Section";
import { TestResults, TestSummary } from "./components";
import { Reports } from "../data";
import { useStateContext } from "../context/StateContext";

export const TestReportDetails = () => {
  const { reportId } = useParams();
  const currentReport = Reports.find((report) => report.id === reportId);
  console.log({ currentReport });

  const { tests } = useStateContext();

  return (
    <Section
      title={`Execution #${reportId}`}
      description={`Test Report Details for Execution #${reportId}`}
    >
      <TestSummary report={currentReport} />
      <TestResults tests={currentReport?.testResults || null} />
    </Section>
  );
};
