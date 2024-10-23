import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

export default function BlogPostNotFound() {
  return (
    <div className="text-center">
      <p className=" text-pink-600 text-3xl font-semibold mb-6">
        Blog not found
      </p>
      <Link href="/">
        <Button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
          Back to Blog
        </Button>
      </Link>
    </div>
  );
}
