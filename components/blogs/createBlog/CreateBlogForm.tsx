"use client";

import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogFormInputs, blogSchema } from "@/schema/schema";
import { toast } from "react-hot-toast";
import { createBlog } from "@/lib/actions/blog-actions";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function CreateBlogForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFormInputs>({
    resolver: zodResolver(blogSchema),
  });
  const router = useRouter();

  useEffect(() => {
    const input = document.querySelector("input");
    if (input) input.focus();
  }, []);

  const onSubmit = async (data: BlogFormInputs) => {
    setIsLoading(true);
    const response = await createBlog(data);

    if (response.success) {
      reset();
      toast.success(response.message);
      router.push("/");
      router.refresh();
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="mb-6 text-3xl font-bold text-purple-500">
        Create New Blog Post
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className={`w-full p-4 border ${
            errors.title ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200`}
        />
        {errors.title && <ErrorMessage error={errors.title} />}
        <textarea
          placeholder="Content"
          {...register("content")}
          className={`w-full p-4 border ${
            errors.content ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200 h-40 resize-none`}
        />
        {errors.content && <ErrorMessage error={errors.content} />}
        <Button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition duration-200"
          isLoading={isLoading}
        >
          Create Blog
        </Button>
      </form>
    </div>
  );
}
