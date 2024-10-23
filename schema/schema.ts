import { z } from "zod";


export const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export type BlogFormInputs = z.infer<typeof blogSchema>;