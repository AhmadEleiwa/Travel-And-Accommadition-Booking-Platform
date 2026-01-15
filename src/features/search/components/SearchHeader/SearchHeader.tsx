import { Typography, Box } from "@mui/material";
import type { SearchHeaderProps } from "./SearchHeader.types";

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  loading,
  count,
  query,
}) => (
  <Box mb={2}>
    <Typography variant="h6" fontWeight={700}>
      {loading
        ? "Searching…"
        : `${count} properties found in ${query || "everywhere"}`}
    </Typography>
  </Box>
);
