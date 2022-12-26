import { isNull, isUndefined } from "../utils/is";

export class UserId {
  private id: string;

  constructor(id: string) {
    if (isNull(id) || isUndefined(id)) {
      throw new Error("idは文字列です");
    }

    this.id = id;
  }
}

export class User {
  private readonly id: UserId;
  private name: string;

  constructor(id: UserId, name: string) {
    if (isNull(id) || isUndefined(id)) {
      throw new Error("id requires UserId instance");
    }
    if (isNull(name) || isUndefined(name) || name === "") {
      throw new Error("nameは1文字以上の文字列を期待しています");
    }

    this.id = id;
    this.name = this.changeName(name);
  }

  public changeName(name: string): string {
    try {
      if (name.length < 3) {
        throw new Error("nameは3文字以上です");
      }
    } catch (err) {
      console.log(err);
      throw new Error();
    }

    return name;
  }

  public equals(other: User): boolean {
    return this.id === other.id;
  }
}
