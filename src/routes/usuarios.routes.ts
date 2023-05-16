import { Router } from "express";
import  controllers  from "../controllers/index"

const router = Router();

router.get("/", controllers.Users.get_Usuarios);
router.get("/:id", controllers.Users.get_Usuario);
router.put("/:id", controllers.Users.put_Usuario);
router.post("/", controllers.Users.post_Usuario);
router.delete("/:id", controllers.Users.delete_Usuario);

export { router };
