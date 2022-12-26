function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}

function isNull(value: unknown): value is null {
  return value === null;
}

export { isUndefined, isNull };
