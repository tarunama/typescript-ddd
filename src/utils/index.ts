export function clone(obj: object): object {
  return JSON.parse(JSON.stringify(obj));
}
