export type TestReportCardProps = {
  title: string;
  description?: string;
  result: {
    passed: number;
    failed: number;
  };
};
