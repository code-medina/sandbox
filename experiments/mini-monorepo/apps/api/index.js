
import express from "express";
import { formatUser } from "@mini/shared";

const app = express()

app.get("/", (req, res) => {
  res.send(formatUser("nahuel"))
})

app.listen(3000, () => {
  console.log("API running")
})