import { Router } from "express";
import controllers from "../controllers/index"

const router = Router();

router.post("/login", controllers.Auth.auth_Login);
router.post("/register", controllers.Auth.auth_Register);

export { router };