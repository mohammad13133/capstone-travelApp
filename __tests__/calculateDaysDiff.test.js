const { calculateDaysDiff } = require("../src/client/js/calculateDaysDiff.js");

describe("Date Difference Calculation", () => {
  test("should return correct number of days between two dates", () => {
    expect(calculateDaysDiff("2025-03-03", "2025-04-04")).toBe(32);
  });
});
