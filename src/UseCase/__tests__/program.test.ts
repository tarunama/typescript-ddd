import { test, expect } from "vitest";

import { Program } from "../program";
import { InMemoryUserRepository } from "../../Repository/userRepository";

test("Program", () => {
  const userRepository = new InMemoryUserRepository();
  const program = new Program(userRepository);

  program.createUser("tarou");

  const firstUser = userRepository.dictionary.values().next();

  expect(firstUser).not.toBeNull();
  expect(firstUser.value.name).toEqual("tarou");
});
