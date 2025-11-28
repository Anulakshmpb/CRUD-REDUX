import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../Features/UserDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
