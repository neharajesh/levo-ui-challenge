import "./App.css";
import { Organizations } from "./components/Organizations";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { TestReports } from "./components/TestReports";
import { TestReportDetails } from "./components/TestReportDetails";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Organizations />} />
          <Route
            path="/organization/:organizationId"
            element={<TestReports />}
          />
          <Route
            path="/organization/:organizationId/report/:reportId"
            element={<TestReportDetails />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
