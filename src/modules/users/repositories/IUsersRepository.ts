import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): Promise<void>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  turnAdmin(user: User): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
