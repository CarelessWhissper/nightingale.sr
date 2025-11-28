import { configureStore } from "@reduxjs/toolkit";
import commisionReducer from "./slices/commissionSlice";
export const store = configureStore({
  reducer: {
    commission: commisionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
