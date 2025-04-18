import express from "express";
import dotenv from "dotenv";
import { create } from "./model/user.model.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", async (req, res) => {
  const { name, email } = req.body;
  const data = await create({ name, email });
  res.status(200).send(data);
});

// Listen
app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
