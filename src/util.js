import fetch from "node-fetch";
import { readFile, writeFile } from "fs/promises";
import CardModule from "./components/CardModule.js";
import FormModule from "./components/FormModule.js";
import path from "path";

export const generateFormModule = async () => {
  let html = await readFile(path.resolve("./public/template.html"), "utf-8");
  const container = FormModule();
  html = html.replace(/%\w+%/g, container);
  await writeFile(path.resolve("./index.html"), html);
};

export const generateCardModule = async (message) => {
  let html = await readFile(path.resolve("./public/template.html"), "utf-8");
  const container = CardModule(message);
  html = html.replace(/%\w+%/g, container);
  await writeFile(path.resolve("./index.html"), html);
};
