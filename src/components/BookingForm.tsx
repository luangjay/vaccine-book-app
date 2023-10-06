"use client";

import { type Hospital } from "@/lib/schema";
import { Event } from "@mui/icons-material";
import { Button, MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const genders = ["Male", "Female", "Others"];

type BookingFormProps = {
  hospitals: Hospital[];
};

export default function BookingForm({ hospitals }: BookingFormProps) {
  return (
    <form className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 py-8">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full bg-primary p-2">
          <Event sx={{ color: "Background" }} />
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-primary-dark">
          Vaccine Booking
        </h1>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="tracking-tight text-foreground/70">Name</h2>
        <div className="flex w-full gap-4">
          <TextField size="small" sx={{ flex: 1 }} label="First name" />
          <TextField size="small" sx={{ flex: 1 }} label="Last name" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        <h2 className="tracking-tight text-foreground/70">
          Personal information
        </h2>
        <div className="flex w-full gap-4">
          <TextField size="small" sx={{ flex: 1.5 }} label="SSN" />
          <TextField size="small" sx={{ flex: 1 }} label="Telephone number" />
        </div>
        <div className="flex w-full gap-4">
          <TextField size="small" sx={{ flex: 1 }} label="Gender" select>
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{ flex: 1.5 }}
              slotProps={{ textField: { size: "small" } }}
              label="Birth date"
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="flex w-full flex-col justify-start gap-4">
        <h2 className="tracking-tight text-foreground/70">
          Booking information
        </h2>
        <div className="flex w-full gap-4">
          <TextField size="small" sx={{ flex: 1.5 }} label="Hospital" select>
            {hospitals.map((hospital) => (
              <MenuItem key={hospital.id} value={hospital.id}>
                {hospital.name}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{ flex: 1 }}
              slotProps={{ textField: { size: "small" } }}
              label="Date"
            />
          </LocalizationProvider>
        </div>
        <div className="flex w-full gap-4">
          <TextField size="small" sx={{ flex: 1 }} label="Notes" />
        </div>
      </div>
      <Button variant="contained" color="primary">
        Confirm
      </Button>
    </form>
  );
}
