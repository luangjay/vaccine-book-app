import { getHospitals } from "@/api/hospitals";
import Card from "./Card";

export default async function CardPanel() {
  const hospitals = await getHospitals();

  return (
    <ul className="grid auto-cols-fr grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {hospitals.map((hospital) => (
        <li key={hospital._id}>
          <Card hospital={hospital} />
        </li>
      ))}
    </ul>
  );
}
