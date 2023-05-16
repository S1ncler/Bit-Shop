import { Router } from "express";
import controllers from "../controllers/index"

const router = Router();

router.get("/", controllers.Productos.get_Productos);
router.get("/:id", controllers.Productos.get_Producto);
router.put("/:id", controllers.Productos.put_Producto);
router.post("/", controllers.Productos.post_Producto);
router.delete("/:id", controllers.Productos.delete_Producto);

export { router };
