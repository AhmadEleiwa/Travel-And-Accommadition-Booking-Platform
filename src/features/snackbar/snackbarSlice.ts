import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  EnqueuePayload,
  SnackbarItem,
  SnackbarState,
} from "./snackbar.type";

const MAX_SNACKBARS = 5;
const BASE_DURATION = 4000;

const initialState: SnackbarState = {
  items: [],
  max: MAX_SNACKBARS,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    enqueueSnackbar: (state, action: PayloadAction<EnqueuePayload>) => {
      const newItem: SnackbarItem = {
        id: crypto.randomUUID(),
        message: action.payload.message,
        severity: action.payload.severity ?? "info",
        duration: BASE_DURATION,
      };

      state.items.push(newItem);

      // FIFO removal if over max
      if (state.items.length > state.max) {
        state.items.shift();
      }
    },

    removeSnackbar: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearSnackbars: (state) => {
      state.items = [];
    },
  },
});

export const { enqueueSnackbar, removeSnackbar, clearSnackbars } =
  snackbarSlice.actions;

export default snackbarSlice.reducer;
