const { createSlice } = require("@reduxjs/toolkit");

const UserRoleSlicer = createSlice({
  name: "userRole",
  initialState: {
    user: "",
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
export const { addUser } = UserRoleSlicer.actions;
export default UserRoleSlicer.reducer;
