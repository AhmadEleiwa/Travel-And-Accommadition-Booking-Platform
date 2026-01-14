import { Alert, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { removeSnackbar } from "../../snackbarSlice";
const GAP = 8;
const BASE_BOTTOM = 16;

export const Snackbar = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.snackbar.items);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: BASE_BOTTOM,
        left: "2%",
        transform: "translateX(0%)",
        display: "flex",
        flexDirection: "column",
        gap: `${GAP}px`,
        zIndex: (theme) => theme.zIndex.snackbar,
        pointerEvents: "none",
      }}
    >
      {items.map((snackbar) => {
        return (
          <Alert
            key={snackbar.id}
            severity={snackbar.severity}
            variant="filled"
            onClose={() => dispatch(removeSnackbar(snackbar.id))}
            sx={{
              width: 360,
              pointerEvents: "auto",
              animation: "fadeInUp 0.25s ease",
            }}
          >
            {snackbar.message}
          </Alert>
        );
      })}
    </Box>
  );
};
