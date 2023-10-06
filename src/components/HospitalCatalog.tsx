import { type Hospital } from "@/lib/schema";
import Card from "./Card";

type CardPanelProps = {
  hospitalsPromise: Promise<Hospital[]>;
};

export default async function HospitalCatalog({
  hospitalsPromise,
}: CardPanelProps) {
  const hospitals = await hospitalsPromise;
  return (
    <ul className="grid auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {hospitals.map((hospital) => (
        <li key={hospital.id}>
          <Card hospital={hospital} />
        </li>
      ))}
    </ul>
  );
}
