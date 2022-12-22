import { test, expect } from "vitest"

import { Money } from "../money";

test('add method', () => {
    const money1 = new Money(1000, "円");
    const money2 = new Money(500, "円");

    // add amount
    expect(money1.add(money2).amount).toEqual(1500);
});
