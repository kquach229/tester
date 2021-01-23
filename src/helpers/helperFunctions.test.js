import { multiply, makeLowerCase } from "./helperFunctions";

test("multiply", () => {
  expect(multiply(2, 10)).toBe(20);
  expect(multiply(6, -2)).toBe(-12);
});

test("makeLowerCase", () => {
  expect(makeLowerCase("THE MAKESHIFT WAY")).toBe("the makeshift way");
});
