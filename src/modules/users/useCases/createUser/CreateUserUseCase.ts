import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../error/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import * as Yup from "yup";

interface IRequest {
  name: string;
  email: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email }: IRequest): Promise<void> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid({ name, email }))) {
      throw new AppError("Validation fails", 400);
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exits!", 404);
    }

    this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
