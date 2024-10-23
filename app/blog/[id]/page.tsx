import fs from "fs/promises";
import { filePath } from "@/lib/constants";
import BlogPostContent from "@/components/blogs/blogPost/BlogPostContent";
import BlogPostNotFound from "@/components/blogs/blogPost/BlogPostNotFound";
import { fetchBlogById } from "@/lib/actions/blog-actions";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// Function to optimize fetch the blog posts

export async function generateStaticParams() {
  const fileContents = await fs.readFile(filePath, "utf8");
  const blogs = JSON.parse(fileContents);
  return blogs.map((blog: Blog) => ({ id: blog.id.toString() }));
}

// Function to generate metadata for the blog post page
export async function generateMetadata({ params: { id } }: BlogPostPageProps) {
  const blog = await fetchBlogById(id);

  return {
    title: blog ? blog.title : "Blog not found",
    description: blog
      ? blog.content.substring(0, 100)
      : "This blog post does not exist.",
  };
}

export default async function BlogPostPage({
  params: { id },
}: BlogPostPageProps) {
  const blog = await fetchBlogById(id);

  if (!blog) {
    return <BlogPostNotFound />;
  }

  return <BlogPostContent blog={blog} />;
}
