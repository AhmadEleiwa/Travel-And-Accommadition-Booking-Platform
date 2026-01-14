import Snackbar from "./components/Snackbar";
import { useSnackbarTimers } from "./useSnackbarTimers";

export const SnackbarProvider = () => {
  useSnackbarTimers();
  return <Snackbar />;
};
