import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../error/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class TurnUserAdminUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepositories: IUsersRepository
  ) {}

  async execute(user_id: string): Promise<User> {
    const user = await this.userRepositories.findById(user_id);

    if (!user) {
      throw new AppError("User not found!", 404);
    }

    return this.userRepositories.turnAdmin(user);
  }
}

export { TurnUserAdminUseCase };
