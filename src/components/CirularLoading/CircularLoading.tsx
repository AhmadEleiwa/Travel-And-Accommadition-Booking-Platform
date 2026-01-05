import { Box, CircularProgress } from "@mui/material";
import type { CircularLoadingProps } from "./CircularLoading.type";

export const CircularLoading: React.FC<CircularLoadingProps> = ({
  loading,
}) => {
  if (!loading) return null; 

  return (
    <Box
      sx={{
        position: "fixed",      
        top: 0,
        left: 0,               
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "rgba(0, 0, 0, 0.4)", 
        zIndex: 9999,          
      }}
    >
      <CircularProgress  />
    </Box>
  );
};