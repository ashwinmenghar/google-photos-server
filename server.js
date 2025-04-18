import express from "express";
import dotenv from "dotenv";
import { create } from "./model/user.model.js";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/", async (req, res) => {
  const data = await create(req.body);
  res.status(200).send(data);
});

// Listen
app.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
