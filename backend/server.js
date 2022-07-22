import express, { json } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.SERVER_PORT || 3000;
const GITHUB_API = process.env.GITHUB_API;

app.get("/users/:user", async (req, res) => {
  try {
    const user = req.params.user;
    const response = await fetch(`${GITHUB_API}/users/${user}`);
    const json = await response.json();
    console.log(json);
    res.status(200).json(json);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running and listening to ${PORT}`);
});
