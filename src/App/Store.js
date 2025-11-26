import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../Features/UserDetailSlice";

export const store = configureStore({
  reducer: {
    app: userDetailReducer,
  },
});
