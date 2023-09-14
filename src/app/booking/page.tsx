import { getHospitals } from "@/api/hospitals";
import BookingForm from "@/components/BookingForm";

export default async function Page() {
  const hospitals = await getHospitals();

  return (
    <div className="container">
      <BookingForm hospitals={hospitals} />
    </div>
  );
}
