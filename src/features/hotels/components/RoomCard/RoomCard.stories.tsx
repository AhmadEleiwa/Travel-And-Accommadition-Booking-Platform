import type { Meta, StoryObj } from "@storybook/react"; // Change this
import { BrowserRouter } from "react-router-dom";
import { MOCK_ROOMS } from "../../../../constants";
import { Container } from "@mui/material";

import RoomCard, { type RoomCardProps } from ".";

const meta = {
  title: "Hotel/RoomCard",
  component: RoomCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // It's better to put the Router decorator here so it applies to ALL stories
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Container sx={{ width: "100%", margin: "10px" }}>
          <Story />
        </Container>
      </BrowserRouter>
    ),
  ],
  args: {
    hotelId: "",
    room: MOCK_ROOMS[0],
  },
} satisfies Meta<RoomCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
