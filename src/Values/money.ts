export class Money {
    public readonly amount: number;
    public readonly currency: string;

    constructor(amount: number, currency: string) {
        if (currency === null || currency === undefined) {
            throw new Error()
        }

        this.amount = amount;
        this.currency = currency;
    }

    public add(money: Money): Money {
        if (money === null || money === undefined) {
            throw new Error("null exception");
        }
        if (this.currency !== money.currency) {
            throw new Error("通貨単位が異なります");
        }

        return new Money(this.amount+ money.amount, money.currency);
    }
}
