import type { Meta, StoryObj } from "@storybook/react";
import { Box, Container } from "@mui/material";
import { DateField } from "./DateField";
import type { DateFieldProps } from "./DateField.type";

const meta = {
  title: "Components/DateField",
  component: DateField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container sx={{ width: "100%" }}>
        <Box
          display="flex"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Story />
        </Box>
      </Container>
    ),
  ],
  args: {
    label: "Check In",
    value: new Date().toISOString().split("T")[0],
    setValue: (val: string) => {
      console.log("Date selected:", val);
    },
  },
} satisfies Meta<DateFieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CheckOut: Story = {
  args: {
    label: "Check Out",
    value: new Date(Date.now() + 86400000).toISOString().split("T")[0],
  },
};
