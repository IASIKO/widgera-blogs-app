"use server";

import fs from "fs/promises";
import { filePath } from "../constants";

// GET Blog list data

export async function fetchBlogs() {
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

// GET Single Blog Post by id

export async function fetchBlogById(id: string) {
  const fileContents = await fs.readFile(filePath, "utf8");
  const blogs = JSON.parse(fileContents);
  return blogs.find((blog: Blog) => blog.id === parseInt(id));
}
