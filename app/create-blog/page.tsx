import CreateBlogForm from "@/components/blogs/createBlog/CreateBlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Blog Post",
  description: "Create New Blog Post",
};

export default function CreateBlogPage() {
  return <CreateBlogForm />;
}
