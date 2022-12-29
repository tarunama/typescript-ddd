import { User, UserId } from "./Domain/Entities/user";
import { IUserRepository } from "./Repository/useRepository";
import { UserService } from "./Service/Domain/UserService";

export class Program {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  createUser(userName: string): void {
    const id = new UserId("id");
    const user = new User(id, userName);
    const userService = new UserService(this.userRepository);

    if (userService.exist(user)) {
      throw new Error("既にそのユーザーは存在しています。");
    }

    this.userRepository.save(user);
  }
}
