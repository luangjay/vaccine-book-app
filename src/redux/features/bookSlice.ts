import { type BookingItem } from "@/interfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookingItem?: BookingItem | null;
};

const initialState: BookState = {};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookingItem = action.payload;
    },
    removeBooking: (state) => {
      state.bookingItem = null;
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;

export default bookSlice.reducer;
