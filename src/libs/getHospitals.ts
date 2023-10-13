import { hospitalSchema, type Hospital } from "@/domain/hospital";
import { sleep } from "@/lib/utils";
import { z } from "zod";

export default async function getHospitals(): Promise<Hospital[]> {
  /* MOCK */
  await sleep(5000);

  const response = await fetch("http://localhost:5000/api/v1/hospitals");

  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }

  const { data } = (await response.json()) as { data: unknown };
  const hospitals = z.array(hospitalSchema).parse(data);
  return hospitals;
}
