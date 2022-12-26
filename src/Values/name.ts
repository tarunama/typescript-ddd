import { isNull, isUndefined } from "../utils/is";

export class Name {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public equals(other: Name): boolean {
    if (isNull(other) || isUndefined(other)) {
      return false;
    }
    return (
      other.firstName === this.firstName && other.lastName === this.lastName
    );
  }
}
