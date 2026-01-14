import type { Meta, StoryObj } from "@storybook/react";
import { Box, Container } from "@mui/material";
import { GuestPicker } from "./GuestPicker";
import type { GuestPickerProps, GuestType } from "./GuestPicker.type";
const MOCK_GUEST: GuestType = {
  adults: 2,
  children: 2,
  rooms: 4,
};
const meta = {
  title: "Components/GuestPicker",
  component: GuestPicker,
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
    guests: MOCK_GUEST,
    setGuests: (g: GuestType) => {
      console.log(
        `guest{adults:${g.adults}, children:${g.children}, rooms:${g.rooms}}`,
      );
    },
  },
} satisfies Meta<GuestPickerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
