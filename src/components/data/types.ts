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
    count: number;
    testsPassed: {
      count: number;
      tests: Array<string>;
    };
    testsFailed: {
      count: number;
      tests: Array<string>;
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
