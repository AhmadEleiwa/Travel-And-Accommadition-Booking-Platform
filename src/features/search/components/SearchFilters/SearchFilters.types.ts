export interface SearchFilterProps {
  filters: {
    priceMax: number;
    stars: number;
  };
  onChange: (filters: SearchFilterProps["filters"]) => void;
}
