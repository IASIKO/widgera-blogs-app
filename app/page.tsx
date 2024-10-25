import BlogList from "@/components/blogs/blogList/BlogList";
import { fetchBlogs } from "@/lib/actions/blog-actions";

export default async function HomePage() {
  const blogs = await fetchBlogs();

  return <BlogList blogs={blogs} />;
}
