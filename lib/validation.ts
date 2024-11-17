import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(500, { message: "Description must be at most 500 characters" }),
  category: z
    .string()
    .min(2, { message: "Category must be at least 2 characters" }),
  link: z
    .string()
    .url({ message: "Invalid URL" })
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");

        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }),
  pitch: z
    .string()
    .min(10, { message: "Pitch must be at least 10 characters" }),
});
