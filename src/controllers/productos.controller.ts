import { Request, Response } from "express";

export const get_Productos = (req: Request, res: Response) => {
  return res.status(200).send("obtener productos");
};
export const get_Producto = ({ params }: Request, res: Response) => {
  const id = params.id;
  return res.status(200).send(`obtener el producto ${id}`);
};
export const post_Producto = ({ body }: Request, res: Response) => {
  return res.status(200).send(`insertar el producto ${body}`);
};
export const put_Producto = ({ params, body }: Request, res: Response) => {
  const id = params.id;
  return res
    .status(200)
    .send(`actualizar el producto ${id} con el nuevo producto ${body}`);
};
export const delete_Producto = ({ params }: Request, res: Response) => {
  const id = params.id;
  return res.status(200).send(`eliminar el producto ${id}`);
};
