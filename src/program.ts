import { User, UserId } from "./Domain/Entities/user";
import { UserService } from "./Service/Domain/UserService";

export class Program {
  createUser(userName: string): void {
    const id = new UserId("id");
    const user = new User(id, userName);
    const userService = new UserService();

    if (userService.exist(user)) {
      throw new Error("既にそのユーザーは存在しています。");
    }

    // process that creating new User
  }
}
