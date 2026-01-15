import {
  Box,
  Button,
  Slider,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
} from "@mui/material";
import type { SearchFilterProps } from "./SearchFilters.types";



export const SearchFilters:React.FC<SearchFilterProps> = ({ filters, onChange }) => {
  return (
    <Paper sx={{ width: 280, height:400, p: 3 , borderRadius:4}}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography fontWeight={700}>Filters</Typography>
        <Button size="small" onClick={() => onChange({ priceMax: 2000, stars: 0 })}>
          Reset
        </Button>
      </Box>

      <Typography gutterBottom fontWeight={600}>
        Max Price
      </Typography>
      <Slider
        value={filters.priceMax}
        min={100}
        max={2000}
        step={50}
        onChange={(_, v) => onChange({ ...filters, priceMax: v as number })}
      />

      <Typography mt={3} gutterBottom fontWeight={600}>
        Star Rating
      </Typography>
      <RadioGroup
        value={filters.stars}
        onChange={(e) => onChange({ ...filters, stars: Number(e.target.value) })}
      >
        {[0, 5, 4, 3].map(s => (
          <FormControlLabel
            key={s}
            value={s}
            control={<Radio />}
            label={s === 0 ? "All ratings" : `${s}+ stars`}
          />
        ))}
      </RadioGroup>
    </Paper>
  );
};
