"use client";

import { type BookingItem } from "@/interfaces";
import { formatDate } from "@/lib/utils";
import { addBooking } from "@/redux/features/bookSlice";
import { type AppDispatch } from "@/redux/store";
import { type Hospital } from "@/types/hospital";
import { Event } from "@mui/icons-material";
import { Button, MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";

type BookingFormProps = {
  hospitals: Hospital[];
};

export default function BookingForm({ hospitals }: BookingFormProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ssn, setSsn] = useState("");
  const [hospital, setHospital] = useState("");
  const [apptDate, setApptDate] = useState<Date | null>(null);

  const makeReservation = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      ssn,
      hospital,
      apptDate,
    });
    if (firstName && lastName && ssn && hospital && apptDate) {
      const bookingItem: BookingItem = {
        firstName,
        lastName,
        ssn,
        hospital,
        apptDate: formatDate(apptDate),
      };
      dispatch(addBooking(bookingItem));
      alert("Booking added!");
    }
  };

  return (
    <form
      className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 py-8"
      onSubmit={makeReservation}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-full bg-primary p-2">
          <Event sx={{ color: "Background" }} />
        </div>
        <h1 className="text-xl font-semibold tracking-tight text-primary-dark">
          Vaccine Booking
        </h1>
      </div>
      <div className="flex w-full flex-col gap-4">
        <p className="tracking-tight text-foreground/70">
          Personal information
        </p>
        <div className="flex w-full gap-4">
          <TextField
            size="small"
            sx={{ flex: 1 }}
            label="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            size="small"
            sx={{ flex: 1 }}
            label="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex w-full gap-4">
          <TextField
            size="small"
            sx={{ flex: 1.5 }}
            label="SSN"
            value={ssn}
            onChange={(e) => setSsn(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-start gap-4">
        <p className="tracking-tight text-foreground/70">Booking information</p>
        <div className="flex w-full gap-4">
          <TextField
            size="small"
            sx={{ flex: 1.5 }}
            label="Hospital"
            select
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          >
            {hospitals.map((hospital) => (
              <MenuItem key={hospital.id} value={hospital.name}>
                {hospital.name}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              sx={{ flex: 1 }}
              slotProps={{ textField: { size: "small" } }}
              label="Date"
              value={apptDate}
              onChange={(date: Date | null) => {
                setApptDate(date);
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Button variant="contained" color="primary" type="submit">
        Confirm
      </Button>
    </form>
  );
}
