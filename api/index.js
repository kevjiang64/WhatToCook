import express from "express";
import router from "./router/router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
