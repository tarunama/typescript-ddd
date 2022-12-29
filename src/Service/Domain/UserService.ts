import { User } from "@/Domain/Entities/user";
import { IUserRepository, UserRepository } from "@/Repository/useRepository";

export class UserService {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exist(user: User): boolean {
    const foundUser = this.userRepository.find(user.name);
    // TODO: impl
    return false;
  }
}
