import { getHospitals } from "@/api/hospitals";
import CardPanel from "@/components/CardPanel";

export default async function Page() {
  const hospitals = await getHospitals();

  return (
    <div className="container relative pb-16 pt-8">
      <CardPanel hospitals={hospitals} />
    </div>
  );
}
