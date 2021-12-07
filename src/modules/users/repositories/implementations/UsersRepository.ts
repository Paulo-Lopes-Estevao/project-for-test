import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async turnAdmin(admin: User): Promise<User> {
    const user = admin;

    user.admin = !user.admin;
    user.updated_at = new Date();

    return await this.repository.save(user);
  }
}

export { UsersRepository };
