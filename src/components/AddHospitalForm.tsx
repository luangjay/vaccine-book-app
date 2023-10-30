import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import getUserProfile from "@/libs/getUserProfile";
import { hospitalSchema } from "@/types/hospital";
import { LocalHospital } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function AddHospitalForm() {
  const session = await getServerSession(authOptions);
  if (!session) return <></>;

  const profile = await getUserProfile(session?.user.token);
  if (profile.role !== "admin") return <></>;

  const addHospital = async (data: FormData) => {
    "use server";

    const hospital = hospitalSchema.omit({ id: true }).parse({
      name: data.get("name"),
      address: data.get("address"),
      district: data.get("district"),
      province: data.get("province"),
      postalcode: data.get("postalcode"),
      tel: data.get("tel"),
      picture: data.get("picture"),
    });

    try {
      await dbConnect();
      await Hospital.create(hospital);
      revalidatePath("/hospital", "page");
      redirect("/hospital");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 py-8"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={addHospital}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full bg-primary p-2">
          <LocalHospital sx={{ color: "Background" }} />
        </div>
        <h2 className="text-xl font-semibold tracking-tight text-primary-dark">
          Create Hospital
        </h2>
      </div>
      <div className="flex w-full flex-col gap-4">
        <p className="tracking-tight text-foreground/70">
          Please provide hospital information
        </p>
        <div className="flex w-full gap-4">
          <TextField
            id="name"
            name="name"
            size="small"
            sx={{ flex: 1 }}
            label="Name"
            required
          />
        </div>
        <div className="flex w-full gap-4">
          <TextField
            id="address"
            name="address"
            size="small"
            sx={{ flex: 1 }}
            label="Address"
            required
          />
        </div>
        <div className="flex w-full gap-4">
          <TextField
            id="district"
            name="district"
            size="small"
            sx={{ flex: 1 }}
            label="District"
            required
          />
          <TextField
            id="province"
            name="province"
            size="small"
            sx={{ flex: 1 }}
            label="Province"
            required
          />
        </div>
        <div className="flex w-full gap-4">
          <TextField
            id="postalcode"
            name="postalcode"
            size="small"
            sx={{ flex: 1 }}
            label="Postal code"
            required
          />
          <TextField
            id="tel"
            name="tel"
            size="small"
            sx={{ flex: 1.5 }}
            label="Tel"
            required
          />
        </div>
        <div className="flex w-full gap-4">
          <TextField
            id="picture"
            name="picture"
            size="small"
            sx={{ flex: 1.5 }}
            label="Picture URL"
            required
          />
        </div>
      </div>
      <Button variant="contained" color="primary" type="submit">
        Confirm
      </Button>
    </form>
  );
}
