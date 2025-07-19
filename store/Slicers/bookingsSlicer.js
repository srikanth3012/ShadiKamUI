import { createSlice } from "@reduxjs/toolkit";
import bookings from "@/lib/bookings/bookings.json";

const BookingsSlicer = createSlice({
  name: "bookin",
  initialState: {
    bookings: [...bookings],
  },
  reducers: {
    addBooking: (state, { payload }) => {
      state.bookings.unshift(payload);
    },
  },
});
export const { addBooking } = BookingsSlicer.actions;
export default BookingsSlicer.reducer;
