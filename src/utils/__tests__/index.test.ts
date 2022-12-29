import { test, expect } from "vitest";
import { clone } from "..";

test("clone", () => {
  const originalObject = {
    one: 1,
    two: 2,
  };

  const clonedObject = clone(originalObject);

  // success deep copy
  expect(clonedObject).toEqual(originalObject);

  // original object value does not change
  expect(originalObject).toEqual({
    one: 1,
    two: 2,
  });
});
