import { z } from "zod";

export const userSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  tel: z.string(),
  role: z.string(),
  createdAt: z.string().datetime(),
});

export type User = z.infer<typeof userSchema>;
