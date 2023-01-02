import { User, UserId } from "@/Domain/Entities/user";
import { clone } from "../utils";

export interface IUserRepository {
  save(user: User): void;
  find(userId: UserId): null | User;
  find(userName: string): null | User;
  delete(user: User): void;
}

export class UserRepository implements IUserRepository {
  private connectionString = "";

  save(user: User): void {
    try {
      // save user
    } catch (error) {
      console.error(error);
    }
  }

  find(userName: string): null | User {
    try {
      // find User
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}

export class InMemoryUserRepository implements IUserRepository {
  dictionary: Map<UserId, User> = new Map();

  save(user: User): void {
    this.dictionary.set(user.id, clone(user));
  }

  find(userName: string): User | null {
    let target = null;

    for (const ele of this.dictionary.values()) {
      if (ele.name === userName) {
        target = ele;
        break;
      }
    }

    if (target === null) {
      return null;
    } else {
      return clone<User>(target);
    }
  }

  delete(user: User): void {
    // TODO: impl
  }
}
