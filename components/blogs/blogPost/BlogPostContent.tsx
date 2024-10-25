import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

interface BlogPostContentProps {
  blog: Blog;
}

export default function BlogPostContent({
  blog: { title, content },
}: BlogPostContentProps) {
  return (
    <div className="max-w-3xl sm:mx-auto p-5 bg-white shadow-md rounded-lg mx-2 flex flex-col items-start">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">{title}</h1>
      <div className="prose lg:prose-xl text-gray-800">
        <p>{content}</p>
      </div>
      <div className="mt-6">
        <Link href="/">
          <Button type="button">Back to Blog</Button>
        </Link>
      </div>
    </div>
  );
}
