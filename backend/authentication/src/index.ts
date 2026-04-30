import express from "express";
import cors from "cors";
import { AuthController } from "./controllers/auth.controller.js";
const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Is lived"));

const authBasic = new AuthController();
app.post("/api/v1/auth/register", authBasic.register);
const port = 8888;
app
  .listen(port, () => console.log(`server run on http://localhost:${port}`))
  .addListener("error", console.error);
