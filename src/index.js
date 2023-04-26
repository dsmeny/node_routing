import express from "express";
import morgan from "morgan";
import path from "path";
import { generateFormModule, generateCardModule } from "./util.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));
app.use(morgan("dev"));

app.get("/api", (req, res) => {
  res.status(200);
  res.json({ message: "ok", data: "api response" });
});

app.get("/message", (req, res) => {
  generateFormModule();
  res.status(200);
  res.sendFile(path.resolve("./index.html"));
});

app.post("/message", (req, res) => {
  const message = req.body.text;
  console.log(message);

  generateCardModule(message);

  res.status(200);
  res.redirect("/message");
});

app.post("/api", async (req, res) => {
  res.status(200);
  res.json({ message: "ok", data: "api response" });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
