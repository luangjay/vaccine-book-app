import { getHospitals } from "@/api/hospitals";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    hid: string;
  };
};

export default async function Page({ params }: PageProps) {
  const hospitals = await getHospitals();
  const hospital = hospitals.find(
    (hospital) => hospital.id === parseInt(params.hid)
  );

  if (!hospital) notFound();
  return (
    <main className="container py-8">
      <div className="flex gap-8">
        <div className="rounded-inherit relative aspect-[3/2] w-96">
          <Image
            className="rounded-xl object-cover shadow-xl"
            quality={100}
            src={hospital.image ?? ""}
            alt={hospital.name ?? ""}
            fill
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-primary-dark">
            {hospital.name}
          </h1>
          <p>{hospital.description}</p>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const hospitals = await getHospitals();
  return hospitals.map((hospital) => hospital.id.toString());
}
