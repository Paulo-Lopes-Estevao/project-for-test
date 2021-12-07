import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListAllUserController } from "../modules/users/useCases/listAllUsers/ListAllUserController";
import { ShowUserProfileController } from "../modules/users/useCases/showUserProfile/ShowUserProfileController";
import { TurnUserAdminController } from "../modules/users/useCases/turnUserAdmin/TurnUserAdminController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUserController = new ListAllUserController();
const showUserProfileController = new ShowUserProfileController();
const turnUserAdminController = new TurnUserAdminController();

usersRoutes.get("/", listAllUserController.handle);

usersRoutes.get("/:user_id", showUserProfileController.handle);

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/:user_id/admin", turnUserAdminController.handle);

export { usersRoutes };
