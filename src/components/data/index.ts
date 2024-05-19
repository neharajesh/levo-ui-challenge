import { Organization, Report, Test } from "./types";

const Organizations: Array<Organization> = [
  {
    id: "1",
    name: "Organization A",
    reports: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "Organization B",
    reports: ["4", "5", "6"],
  },
];

const Reports: Array<Report> = [
  {
    id: "1",
    date_created: new Date(Date.now() - 1000 * 60),
    duration: "10 minutes",
    testResults: {
      testsPassed: {
        count: 10,
        ids: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      testsFailed: {
        count: 0,
        ids: [],
      },
    },
    warnings: [""],
    branch: "master",
    commitId: "a3df3ac6",
    githubUser: "neharajesh",
    webUrl: "https://app-staging.levo.ai/api",
  },

  {
    id: "2",
    date_created: new Date(Date.now() - 1000 * 60 * 2),
    duration: "30 minutes",
    testResults: {
      testsPassed: {
        count: 7,
        ids: ["11", "12", "13", "14", "15", "16", "17"],
      },
      testsFailed: {
        count: 3,
        ids: ["18", "19", "20"],
      },
    },
    warnings: ["Took too long"],
    branch: "master",
    commitId: "a3df3ac6",
    githubUser: "neharajesh",
    webUrl: "https://app-staging.levo.ai/api",
  },

  {
    id: "3",
    date_created: new Date(Date.now() - 1000 * 60 * 3),
    duration: "10 minutes",
    testResults: {
      testsPassed: {
        count: 0,
        ids: [],
      },
      testsFailed: {
        count: 10,
        ids: ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
      },
    },
    warnings: [""],
    branch: "master",
    commitId: "a3df3ac6",
    githubUser: "neharajesh",
    webUrl: "https://app-staging.levo.ai/api",
  },

  {
    id: "4",
    date_created: new Date(Date.now() - 1000 * 60 * 4),
    duration: "4 minutes",
    testResults: {
      testsPassed: {
        count: 3,
        ids: ["31", "32", "33"],
      },
      testsFailed: {
        count: 0,
        ids: [],
      },
    },
    warnings: [""],
    branch: "master",
    commitId: "a3df3ac6",
    githubUser: "neharajesh",
    webUrl: "https://app-staging.levo.ai/api",
  },

  {
    id: "5",
    date_created: new Date(Date.now() - 1000 * 60 * 5),
    duration: "10 minutes",
    testResults: {
      testsPassed: {
        count: 0,
        ids: [],
      },
      testsFailed: {
        count: 2,
        ids: ["34", "35"],
      },
    },
    warnings: [""],
    branch: "master",
    commitId: "a3df3ac6",
    githubUser: "neharajesh",
    webUrl: "https://app-staging.levo.ai/api",
  },

  {
    id: "6",
    date_created: new Date(Date.now() - 1000 * 60 * 6),
    duration: "5 minutes",
    testResults: {
      testsPassed: {
        count: 5,
        ids: ["36", "37", "38", "39", "40"],
      },
      testsFailed: {
        count: 0,
        ids: [],
      },
    },
    warnings: [""],
    branch: "master",
    commitId: "a3df3ac6",
    githubUser: "neharajesh",
    webUrl: "https://app-staging.levo.ai/api",
  },
];

const Tests: Array<Test> = [
  {
    id: "1",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "2",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "3",
    method: "post",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "4",
    method: "put",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "5",
    method: "delete",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "6",
    method: "post",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "7",
    method: "put",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "8",
    method: "put",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "9",
    method: "put",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "10",
    method: "delete",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "11",
    method: "delete",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "12",
    method: "delete",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "13",
    method: "delete",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "14",
    method: "get",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "15",
    method: "get",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "16",
    method: "get",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "17",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "18",
    method: "post",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "19",
    method: "post",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "20",
    method: "post",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "21",
    method: "post",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "22",
    method: "put",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "23",
    method: "put",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "24",
    method: "put",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "25",
    method: "put",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "26",
    method: "delete",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "27",
    method: "delete",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "28",
    method: "delete",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "29",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "30",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "31",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "32",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "33",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "34",
    method: "get",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "35",
    method: "post",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
  {
    id: "36",
    method: "post",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "37",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "38",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "39",
    method: "get",
    url: "/application/{applicationId}/services",
    executionTime: "4 seconds",
  },
  {
    id: "40",
    method: "put",
    url: "/application/{applicationId}/services/{serviceId}",
    executionTime: "4 seconds",
  },
];

export { Organizations, Reports, Tests };
