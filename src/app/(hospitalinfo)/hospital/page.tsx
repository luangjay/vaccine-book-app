import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";

export default function Page() {
  const hospitals = getHospitals();

  return (
    <div className="container relative flex flex-col items-center gap-6 pb-16 pt-8">
      <h1 className="text-xl font-medium tracking-tight text-primary-dark">
        Select your vaccine partner
      </h1>
      <Suspense fallback={<LinearProgress className="w-full" />}>
        <HospitalCatalog hospitalsPromise={hospitals} />
      </Suspense>
    </div>
  );
}
