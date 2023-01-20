import { Router } from "express";
import { UsersController } from "../controllers/usersController";

const router = Router();

router.get("/getUsers", UsersController.getUsers);
router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.post("/update", UsersController.updateUser);

export default router;
