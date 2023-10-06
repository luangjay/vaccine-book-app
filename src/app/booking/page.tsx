import BookingForm from "@/components/BookingForm";
import getHospitals from "@/libs/getHospitals";

export default async function Page() {
  const hospitals = await getHospitals();

  return (
    <div className="container">
      <BookingForm hospitals={hospitals} />
    </div>
  );
}
