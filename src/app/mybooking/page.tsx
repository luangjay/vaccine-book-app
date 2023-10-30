"use client";

import { formatDate } from "@/lib/utils";
import { removeBooking } from "@/redux/features/bookSlice";
import { useAppSelector } from "@/redux/store";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Page() {
  const dispatch = useDispatch();
  const bookingItem = useAppSelector((state) => state.bookSlice.bookingItem);

  return (
    <main className="container">
      {!bookingItem ? (
        <p>No booking item</p>
      ) : (
        <div className="flex w-full max-w-lg flex-col items-start gap-2">
          <h3 className="text-lg font-semibold">{bookingItem.hospital}</h3>
          <p>
            Name: {bookingItem.firstName} {bookingItem.lastName}
          </p>
          <p>SSN: {bookingItem.ssn}</p>
          <p>Hospital: {bookingItem.hospital}</p>
          <p>Date: {formatDate(bookingItem.apptDate)}</p>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              dispatch(removeBooking());
            }}
          >
            Remove
          </Button>
        </div>
      )}
    </main>
  );
}
