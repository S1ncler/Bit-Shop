import { Request, Response } from "express";

export const get_Usuarios = (req: Request, res: Response) => {
  return res.status(200).send("obtener usuarios");
};
export const get_Usuario = ({ params }: Request, res: Response) => {
  const id = params.id;
  return res.status(200).send(`obtener el usuario ${id}`);
};
export const post_Usuario = ({ body }: Request, res: Response) => {
  return res.status(200).send(`insertar el usuario ${body}`);
};
export const put_Usuario = ({ params, body }: Request, res: Response) => {
  const id = params.id;
  return res
    .status(200)
    .send(`actualizar el usuario ${id} con el nuevo usuario ${body}`);
};
export const delete_Usuario = ({ params }: Request, res: Response) => {
  const id = params.id;
  return res.status(200).send(`eliminar el usuario ${id}`);
};
