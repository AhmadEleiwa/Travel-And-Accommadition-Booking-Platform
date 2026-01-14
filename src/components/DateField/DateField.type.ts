import type { TextFieldProps } from "@mui/material";

export interface DateFieldProps extends Omit<
  TextFieldProps,
  "value" | "onChange"
> {
  label: string;
  value: string;
  setValue: (v: string) => void;
}
