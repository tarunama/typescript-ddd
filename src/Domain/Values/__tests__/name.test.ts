import { test, expect } from "vitest";

import { Name } from "../name";

test("equal method", () => {
  const yamadaTarou = new Name("yamada", "tarou");
  const tarouYamada = new Name("yamada", "tarou");

  // same value
  expect(yamadaTarou.equals(tarouYamada)).toBeTruthy();

  const yamadaHanako = new Name("yamada", "hanako");

  // not same value
  expect(yamadaTarou.equals(yamadaHanako)).toBeFalsy();
});
