import { z } from "zod";

export const authUserSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  token: z.string(),
});

export type AuthUser = z.infer<typeof authUserSchema>;
