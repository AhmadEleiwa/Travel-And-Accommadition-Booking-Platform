import { Button, type ButtonProps } from "@mui/material";
import { Search } from "lucide-react";

export const SearchButton: React.FC<ButtonProps> = ({ ...props }) => (
  <Button
    {...props}
    type="submit"
    variant="contained"
    sx={{
      bgcolor: "primary.main",
      color: "white",
      px: 5,
      py: 1.5,
      borderRadius: 3,
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      gap: 1,
      boxShadow: "0 4px 10px rgba(59,130,246,0.4)",
      ":hover": { bgcolor: "primary.dark" },
      ":active": { transform: "scale(0.95)" },
    }}
  >
    <Search size={20} />
    {props.children ?? "Search"}
  </Button>
);
