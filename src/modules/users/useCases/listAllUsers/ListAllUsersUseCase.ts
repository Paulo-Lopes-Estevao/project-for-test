import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepositories: IUsersRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepositories.list();

    return users;
  }
}

export { ListAllUsersUseCase };
