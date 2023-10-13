import BookingForm from "@/components/BookingForm";
import { formatDate } from "@/lib/utils";
import getHospitals from "@/libs/getHospitals";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user.token) return <></>;

  const profile = await getUserProfile(session.user.token);
  const hospitals = await getHospitals();

  return (
    <div className="container flex flex-col items-center gap-4 py-6">
      <p>Sorry for the bad UI. I will improve in the final project. 🙏</p>
      <div className="mx-auto flex w-full max-w-xl flex-col gap-1 rounded-xl bg-support/70 p-6">
        <div className="col-span-2 mb-2 text-xl font-semibold leading-none tracking-tight">
          {profile.name}
        </div>
        <div className="flex">
          <div className="flex-1">Email</div>
          <div className="flex-[3]">{profile.email}</div>
        </div>
        <div className="flex">
          <div className="flex-1">Tel.</div>
          <div className="flex-[3]">{profile.tel}</div>
        </div>
        <div className="flex">
          <div className="flex-1">Member since</div>
          <div className="flex-[3]">{formatDate(profile.createdAt)}</div>
        </div>
      </div>
      <BookingForm hospitals={hospitals} />
    </div>
  );
}
