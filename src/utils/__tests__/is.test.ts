import { test, expect } from "vitest";

import { isNull, isUndefined } from "../is";

test("isNull", () => {
  // truthy
  expect(isNull(null)).toBeTruthy();

  // falsy against primitive values
  const sym = Symbol("sym");

  expect(isNull("foo")).toBeFalsy();
  expect(isNull(1)).toBeFalsy();
  expect(isNull(false)).toBeFalsy();
  expect(isNull(undefined)).toBeFalsy();
  expect(isNull(() => {})).toBeFalsy();
  expect(isNull(sym)).toBeFalsy();
  expect(isNull({})).toBeFalsy();
  expect(isNull(1n)).toBeFalsy();
});

test("isUndefined", () => {
  // truthy
  expect(isUndefined(undefined)).toBeTruthy();

  // falsy against primitive values
  const sym = Symbol("sym");

  expect(isUndefined("foo")).toBeFalsy();
  expect(isUndefined(1)).toBeFalsy();
  expect(isUndefined(null)).toBeFalsy();
  expect(isUndefined(false)).toBeFalsy();
  expect(isUndefined(() => {})).toBeFalsy();
  expect(isUndefined(sym)).toBeFalsy();
  expect(isUndefined({})).toBeFalsy();
  expect(isUndefined(1n)).toBeFalsy();
});
