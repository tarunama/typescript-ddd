import { User } from "@/Domain/Entities/user";

export interface IUserRepository {
  save(user: User): void;
  find(userName: string): void;
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

  find(userName: string): void {
    try {
      // find User
    } catch (error) {
      console.error(error);
    }
  }
}
