import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllUserUseCase = container.resolve(ListAllUsersUseCase);

    const all = await listAllUserUseCase.execute();

    return response.json(all);
  }
}

export { ListAllUserController };
