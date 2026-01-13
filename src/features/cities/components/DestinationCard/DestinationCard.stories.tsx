import type { Meta, StoryObj } from "@storybook/react"; // Change this
import { BrowserRouter } from "react-router-dom";
import { MOCK_CITIES } from "../../../../constants";
import { Container } from "@mui/material";
import DestinationCard from ".";

const meta = {
  title: "Cities/DestinationCard",
  component: DestinationCard,
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
    city: MOCK_CITIES[0],
    linkTo: `/search?q=${MOCK_CITIES[0].name}`,
  },
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
