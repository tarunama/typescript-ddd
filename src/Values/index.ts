class Name {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public fullName(firstName: string, lastName: string) {
        firstName = firstName;
        lastName = lastName;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }
}
