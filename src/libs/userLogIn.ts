import { authUserSchema, type AuthUser } from "@/types/auth";

export default async function userLogIn(
  email: string,
  password: string
): Promise<AuthUser> {
  const response = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  const data: unknown = await response.json();
  const user = authUserSchema.parse(data);
  return user;
}
