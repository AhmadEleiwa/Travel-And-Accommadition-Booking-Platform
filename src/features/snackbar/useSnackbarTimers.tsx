import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { removeSnackbar } from "./snackbarSlice";

export const useSnackbarTimers = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.snackbar.items);

  useEffect(() => {
    items.forEach((item) => {
      const timer = setTimeout(() => {
        dispatch(removeSnackbar(item.id));
      }, item.duration);

      return () => clearTimeout(timer);
    });
  }, [items, dispatch]);
};
