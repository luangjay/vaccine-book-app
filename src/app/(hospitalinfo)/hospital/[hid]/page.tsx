import getHospital from "@/libs/getHospital";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    hid: string;
  };
};

export default async function Page({ params }: PageProps) {
  const hospital = await getHospital(params.hid);

  if (!hospital) notFound();
  return (
    <main className="container py-8">
      <div className="flex gap-8">
        <div className="rounded-inherit relative aspect-[3/2] w-[32rem]">
          <Image
            className="rounded-xl object-cover shadow-xl"
            quality={100}
            src={hospital.picture ?? ""}
            alt={hospital.name ?? ""}
            fill
          />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-2xl font-semibold tracking-tight text-primary-dark">
            {hospital.name}
          </h1>
          <p>Address: {hospital.address}</p>
          <p>District: {hospital.district}</p>
          <p>Province: {hospital.province}</p>
          <p>Postal code: {hospital.postalcode}</p>
          <p>Tel: {hospital.tel}</p>
        </div>
      </div>
    </main>
  );
}

// export async function generateStaticParams() {
//   const hospitals = await getHospitals();
//   return hospitals.map((hospital) => ({ hid: hospital.id.toString() }));
// }
