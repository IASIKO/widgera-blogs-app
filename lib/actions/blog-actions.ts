"use server";

import fs from "fs/promises";
import { filePath } from "../constants";

// GET Blog list data

export async function fetchBlogs() {
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}
