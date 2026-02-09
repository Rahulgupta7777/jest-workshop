const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

// 1. test for invalid subtotal

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

// 2. test for no coupon case

test("for no coupon case", () => {
  expect(calculateFinalAmount(100)).toBe(100);
});

// 3. test for SAVE10 coupon

test("for SAVE10 coupon", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
});

// 4. test for FLAT50 coupon

test("for FLAT50 coupon", () => {
  expect(calculateFinalAmount(1000, "FLAT50")).toBe(900);
});

// 5. test for case-insensitive coupon

test("for case-insensitive coupon", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90);
});




//  Wrote Jest tests for:
// -  1. no coupon case 
// -  2. SAVE10 coupon
// -  3. FLAT50 boundary case
// -  4. invalid subtotal throws error
// -  5. case-insensitive coupon
