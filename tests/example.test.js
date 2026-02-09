const { calculateFinalAmount } = require("../src/pricing");

// example test of sanity check

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

// 1. test for invalid subtotal

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

// 2. test for Not a number values

test("for Not a number values", () => {
  expect(() => calculateFinalAmount("gfabgbvsdkhfvsa", "FLAT50")).toThrow(
    "Invalid subtotal",
  );
});

// 3. test for subtotal greater than 1000

test("check for subtotal greater than 1000", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});

// 4. test for invalid coupon

test("if coupon is not availabe", () => {
  expect(() => calculateFinalAmount(100, "DISCOUNT")).toThrow("Invalid Coupon");
});

// 5. test for SAVE10 coupon

test("for SAVE10 coupon", () => {
  expect(calculateFinalAmount(100, "SAVE10")).toBe(90);
});

// 6. test for FLAT50 coupon

test("for FLAT50 coupon", () => {
  expect(calculateFinalAmount(1000, "FLAT50")).toBe(900);
});

// 7. test for case-insensitive coupon

test("for case-insensitive coupon", () => {
  expect(calculateFinalAmount(100, "save10")).toBe(90);
});


