import { filePath } from "@/lib/constants";
import fs from "fs/promises";

export async function POST(request: Request) {
  try {
    const newBlog = await request.json();
    const fileContents = await fs.readFile(filePath, "utf8");
    const blogs = JSON.parse(fileContents);

    blogs.unshift(newBlog);
    await fs.writeFile(filePath, JSON.stringify(blogs, null, 2));

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
