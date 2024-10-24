import Link from "next/link";
import Button from "../ui/Button";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog: { title, content, id },
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform md:hover:scale-105">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content.slice(0, 30)}...</p>
        <Link href={`/blog/${id}`}>
          <Button type="button">Read More</Button>
        </Link>
      </div>
    </div>
  );
}
