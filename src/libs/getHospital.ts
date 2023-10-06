import { hospitalSchema, type Hospital } from "@/lib/schema";

export default async function getHospital(id: string): Promise<Hospital> {
  const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }

  const body = (await response.json()) as { data: unknown };
  const hospital = hospitalSchema.parse(body.data);
  return hospital;
}
