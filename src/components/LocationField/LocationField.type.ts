import type { TextFieldProps } from "@mui/material";

export interface LocationFieldProps extends Omit<
  TextFieldProps,
  "value" | "onChange"
> {
  query: string;
  setQuery: (v: string) => void;
}
