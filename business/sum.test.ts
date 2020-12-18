import sum from "./sum";

it("Sum valid cases", function () {
  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, -2)).toBe(-3);
  expect(sum(-2, 0)).toBe(-2);
  expect(sum(0, -0)).toBe(0);
  expect(sum(1, -2)).not.toBe(3);
  expect(sum(0, 0)).toBe(0);
});

it("Floats", function () {
  expect(sum(1.1, 2)).toBe(3.1);
});

it("Round big numbers forbidden", function () {
  expect(sum(10000000000000000000000000000000000, 1)).toBe(
    10000000000000000000000000000000001
  );
});
