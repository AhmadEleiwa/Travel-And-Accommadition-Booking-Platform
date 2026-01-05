import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import snackBarReducer from "../features/snackbar/snackbarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    snackbar: snackBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
