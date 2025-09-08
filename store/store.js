const { configureStore } = require("@reduxjs/toolkit");
import BookingsSlicer from "./Slicers/bookingsSlicer";
import UserRoleSlicer from "./Slicers/userRoleSlicer";

const Store = configureStore({
  reducer: {
    bookings: BookingsSlicer,
    userRole: UserRoleSlicer,
  },
});
export default Store;
