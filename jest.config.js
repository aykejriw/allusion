module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // should end with spec.ts and should be under __tests__
  testRegex: ".spec.ts$",
  moduleFileExtensions: ["ts", "js"],
};