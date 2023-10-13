import { hospitalSchema, type Hospital } from "@/domain/hospital";

export default async function getHospital(
  id: string
): Promise<Hospital | undefined> {
  const response = await fetch(`http://localhost:5000/api/v1/hospitals/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }

  const { data } = (await response.json()) as { data: unknown };
  const hospital = hospitalSchema.optional().parse(data);
  return hospital;
}
