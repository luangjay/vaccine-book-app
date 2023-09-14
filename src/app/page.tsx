import { getHospitals } from "@/api/hospitals";
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default async function Home() {
  const hospitals = await getHospitals();

  return (
    <main>
      <Banner />
      <div className="container relative top-60 mt-8 pb-16 xl:px-16">
        <CardPanel hospitals={hospitals} />
      </div>
    </main>
  );
}
