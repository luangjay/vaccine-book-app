import { userSchema, type User } from "@/domain/user";

export default async function getUserProfile(token: string): Promise<User> {
  const response = await fetch("http://localhost:5000/api/v1/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const { data } = (await response.json()) as { data: unknown };
  const user = userSchema.parse(data);
  return user;
}
