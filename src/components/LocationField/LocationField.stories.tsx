import type { Meta, StoryObj } from "@storybook/react";
import { Box, Container } from "@mui/material";
import { LocationField } from "./LocationField";
import type { LocationFieldProps } from "./LocationField.type";

const meta = {
  title: "Components/LocationField",
  component: LocationField,
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
    query:"Japan",
    setQuery:()=>{}

  },
} satisfies Meta<LocationFieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
