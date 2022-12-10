export class Name {
    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public fullName(firstName: string, lastName: string) {
        firstName = firstName;
        lastName = lastName;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public equals(other: Name): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        return other.firstName === this.firstName
          && other.lastName === this.lastName;
    }
}
