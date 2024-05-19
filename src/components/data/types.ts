type Organization = {
  id: string;
  name: string;
  reports: Array<string>;
};

type Report = {
  id: string;
  date_created: Date;
  duration: string;
  testResults: {
    testsPassed: {
      count: number;
      ids: Array<string>;
    };
    testsFailed: {
      count: number;
      ids: Array<string>;
    };
  };
  warnings: Array<string>;
  branch: string;
  commitId: string;
  githubUser: string;
  webUrl: string;
};

type Test = {
  id: string;
  method: string;
  url: string;
  executionTime: string;
};

export type { Organization, Report, Test };
