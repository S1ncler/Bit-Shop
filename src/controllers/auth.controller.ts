import { Request, Response } from "express";

let usuarios = [
  {
    usuario: "S1ncler",
    contraseña: "contraseñaS1ncler",
    email: "s1cler@correo.com",
  },
  {
    usuario: "Philip",
    contraseña: "contraseñaPhilip",
    email: "philip@correo.com",
  },
  {
    usuario: "Dan",
    contraseña: "contraseñaDan",
    email: "dan@correo.com",
  },
  {
    usuario: "Goku",
    contraseña: "contraseñaGoku",
    email: "goku@correo.com",
  },
  {
    usuario: "Pan",
    contraseña: "contraseñaPan",
    email: "Pan@correo.com",
  },
];

export const auth_Login = ({ body }: Request, res: Response) => {
  try {
    const { username, contraseña } = body;
    for (let usuario of usuarios) {
      if (usuario.usuario === username && usuario.contraseña === contraseña)
        return res.status(200).send("Login Ok");
    }
    return res.status(401).send("Credenciales incorrectas");
  } catch (e) {
    console.log(e);
  }
};
export const auth_Register = ({ params }: Request, res: Response) => {
  const id = params.id;
  return res.status(200).send(`obtener el producto ${id}`);
};
