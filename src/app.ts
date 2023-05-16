import Express, { json } from "express";
import "dotenv/config";
import { router } from "./routes";
import dbConnect from "./database";

const PORT = process.env.PORT || 3200;
const app = Express();

app.use(json());
dbConnect()
  .then(() => console.log("Conectado a la base de datos"))
  .catch((e) => console.log(e));
app.use("/api", router);

app.listen(PORT, () => console.log(`ready at port ${PORT}`));
