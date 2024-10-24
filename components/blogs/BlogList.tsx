"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "../ui/Pagination";
import Loader from "../ui/Loader";

interface BlogListProps {
  blogs: Blog[];
}

const BLOGS_PER_PAGE = 12;

export default function BlogList({ blogs }: BlogListProps) {
  const [blogsData, setBlogsData] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);

  useEffect(() => {
    async function loadBlogs() {
      setTotalBlogs(blogs.length);
      const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
      const paginatedBlogs = blogs.slice(
        startIndex,
        startIndex + BLOGS_PER_PAGE
      );
      setBlogsData(paginatedBlogs);
    }
    loadBlogs();
  }, [currentPage, blogs]);

  const totalPages = Math.ceil(totalBlogs / BLOGS_PER_PAGE);

  return (
    <>
      {blogsData.length ? (
        <div className="container mx-auto px-4 py-8">
          <div className="h-[80vh]">
            <h1 className="text-3xl font-bold text-center mb-8 text-purple-500">
              Blog List
            </h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {blogsData.map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
