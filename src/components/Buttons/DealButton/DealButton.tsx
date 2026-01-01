import { Button, type ButtonProps } from "@mui/material";

export const DealButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      {...props}
        variant="contained"
        sx={{
         ...props.sx,
        backgroundColor: "#0f172a", 
        color: "white",
        borderRadius: "12px", 
        padding: "8px 16px", 
        fontSize: "0.875rem",
        fontWeight: 600,
        textTransform: "none", 
      }}
    >
      {props.children}
    </Button>
  );
};