import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(130, { message: "Title musn't be longer then 130 characters." }),
  explanation: z.string().min(20, { message: "Minimum of 20 characters." }),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Tag must have at least 1 character." })
        .max(15, { message: "Tag must not exceed 15 characters." })
    )
    .min(1, { message: "Add at least one tag." })
    .max(3, { message: "Maximum of 3 tags." }),
});

export const AnswerSchema = z.object({
  answer: z.string().min(20, { message: "Minimum of 20 characters." }),
});

export const ProfileSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(50, { message: "Name musn't be longer then 50 characters." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50, { message: "Name musn't be longer then 50 characters." }),
  portfolioWebsite: z.string().url({ message: "Please provide valid URL" }),
  location: z.string().min(3, { message: "Please provide proper location" }),
  bio: z.string().min(20, {
    message: "Bio must be at least 20 characters.",
  }),
});
