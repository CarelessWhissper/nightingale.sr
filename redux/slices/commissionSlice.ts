import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommissionState {
  type: string;
  description: string;
  references: string[];
  style: string;
  size: string;
  extras: Record<string, any>;
  contactName: string;
  contactEmail: string;
}

const initialState: CommissionState = {
  type: "",
  description: "",
  references: [],
  style: "",
  size: "",
  extras: {},
  contactName: "",
  contactEmail: "",
};
const commissionSlice = createSlice({
  name: "commission",
  initialState,
  reducers: {
    updateField: <
      K extends keyof CommissionState
    >(
      state: CommissionState,
      action: PayloadAction<{ field: K; value: CommissionState[K] }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },

    resetCommission: () => initialState,
  },
});

export const { updateField, resetCommission } = commissionSlice.actions;
export default commissionSlice.reducer;
