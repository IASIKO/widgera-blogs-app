"use server";

import fs from "fs/promises";
import { filePath } from "../constants";
import { BlogFormInputs } from "@/schema/schema";

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

// CREATE blog post
export async function createBlog(data: BlogFormInputs) {
  const newBlog = { id: Date.now(), ...data };

  const response = await fetch("http://localhost:3000/api/create-blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBlog),
  });

  if (response.status === 201) {
    return {
      success: true,
      message: "Blog post created successfully!",
    };
  } else {
    return {
      success: false,
      message: "Failed to create blog post.",
    };
  }
}
