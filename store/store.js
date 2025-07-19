const { configureStore } = require("@reduxjs/toolkit");
import BookingsSlicer from "./Slicers/bookingsSlicer";

const Store = configureStore({
  reducer: {
    bookings: BookingsSlicer,
  },
});
export default Store;
