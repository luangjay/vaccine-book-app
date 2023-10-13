import { z } from "zod";

export const hospitalSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  district: z.string(),
  province: z.string(),
  postalcode: z.string(),
  tel: z.string(),
  picture: z.string(),
});

export type Hospital = z.infer<typeof hospitalSchema>;
