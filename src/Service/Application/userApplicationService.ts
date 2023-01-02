import { User } from "@/Domain/Entities/user";
import { UserData } from "@/DTO/user";
import { IUserRepository } from "@/Repository/userRepository";
import { UserService } from "../Domain/UserService";

export class UserApplicationService {
  private readonly userRepository: IUserRepository;
  private readonly userService: UserService;

  constructor(repository: IUserRepository, service: UserService) {
    this.userRepository = repository;
    this.userService = service;
  }

  get(userId: string): UserData {
    const user = this.userRepository.find(userId);

    if (user === null) {
      throw new Error("not exists User");
    }

    const userData = new UserData(user?.id, user?.name);
    return userData;
  }

  register(name: string): void {
    const user = new User(name);

    if (this.userService.exist(user)) {
      throw new Error("Already exists user");
    }

    this.userRepository.save(user);
  }
}
