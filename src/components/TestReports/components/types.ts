export type TestReportCardProps = {
  title: string;
  description?: string;
  result: {
    passed: number;
    failed: number;
  };
  hasWarning?: boolean;
  warningText?: string;
  orgId: string;
  reportId: string;
};
