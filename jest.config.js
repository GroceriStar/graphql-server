'use strict';

module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**"],
  coverageReporters: ["json", "lcov", "text-summary"],
  testURL: "http://localhost",
  testPathIgnorePatterns: [
    "/lib/"
  ],
   moduleDirectories: ["node_modules"]
};
