import { User } from "@/Domain/Entities/user";
import { IUserRepository } from "@/Repository/userRepository";

export class UserService {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  exist(user: User): boolean {
    const foundUser = this.userRepository.find(user.name);
    // TODO: impl
    return false;
  }
}
