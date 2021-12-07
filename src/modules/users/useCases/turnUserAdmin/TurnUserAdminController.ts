import { Request, Response } from "express";
import { container } from "tsyringe";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const turnUserAdminUseCase = container.resolve(TurnUserAdminUseCase);

    const user = await turnUserAdminUseCase.execute(user_id);

    return response.json(user);
  }
}

export { TurnUserAdminController };
