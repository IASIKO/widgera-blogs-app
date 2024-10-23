"use client";

import Button from "@/components/ui/Button";
import { FormEvent, useEffect, useState } from "react";

export default function CreateBlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const input = document.querySelector("input");
    if (input) input.focus();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBlog = { id: Date.now(), title, content };

    try {
      const response = await fetch("/api/create-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        setMessage("Blog post created successfully!");
        setTitle("");
        setContent("");
      } else {
        setMessage("Failed to create blog post.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-purple-500">
        Create New Blog Post
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200 h-40 resize-none"
        />
        <Button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-200"
        >
          Create Blog
        </Button>
      </form>
      {message && <p className="mt-4 text-lg text-gray-700">{message}</p>}
    </div>
  );
}
